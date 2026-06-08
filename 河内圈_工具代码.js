(function(){
  "use strict";
  if (typeof window.HANOI_SEEDS !== 'string') {
    alert('缺少数据文件：请把本 HTML 与「河内圈_种子数据.js」「河内圈_工具代码.js」放在同一文件夹后重新打开。');
    return;
  }
  // ---------- 半径参数 ----------
  var R_OUTER_INIT = (typeof window.R_CIRCLE === 'number' && window.R_CIRCLE > 0) ? window.R_CIRCLE : 3;
  var R_BLOCK_INIT = (typeof window.R_BLOCK === 'number' && window.R_BLOCK > 0) ? window.R_BLOCK : 3;
  var R_OUTER = R_OUTER_INIT;   // 外围投放圈半径 km
  var R_BLOCK = R_BLOCK_INIT;   // 193屏蔽圈半径 km
  var RADIUS_OPTIONS = [2, 2.5, 3, 3.5, 4, 4.5, 5];
  function rlabel(r){ return (r % 1 === 0 ? String(Math.round(r)) : String(r)) + 'km'; }

  // ---------- 固定锚点：193 Bà Triệu（圈#1=屏蔽圈圆心，蜂窝由此起铺） ----------
  var C193 = { name: '193 Bà Triệu', lat: 21.0115, lng: 105.8496 };

  var KM_LAT = 110.86;
  var KM_LNG = 111.32 * Math.cos(21 * Math.PI / 180);

  document.title = '河内广告圈 · 分区工具（193屏蔽＋蜂窝）';
  var h1t = document.getElementById('h1t');
  if (h1t) h1t.textContent = '河内广告圈 · 分区工具（193屏蔽＋蜂窝）';

  function updateSubline(){
    var sub = document.getElementById('subline');
    if (sub) sub.textContent = '圈#1＝屏蔽圈：固定以 193 Bà Triệu 为圆心，半径 ' + rlabel(R_BLOCK) + '（导入后设为排除位置即可屏蔽该区域）。外围投放圈：半径 ' + rlabel(R_OUTER) + '，以193为起点蜂窝排布（间距 √3×' + R_OUTER + '≈' + (Math.sqrt(3) * R_OUTER).toFixed(2) + 'km，行距 ' + (1.5 * R_OUTER).toFixed(2) + 'km），覆盖范围对齐原 498 个 1mi 手工圈，编号按离193由近到远。';
  }

  // ---------- 解析旧1mi圆心（覆盖范围种子） ----------
  var raw = window.HANOI_SEEDS.trim().split(/\r?\n/);
  var seeds = [];
  for (var i0 = 0; i0 < raw.length; i0++) {
    var line = raw[i0].trim();
    if (!line) continue;
    var parts = line.split(',');
    var la0 = parseFloat(parts[0]);
    var lo0 = parseFloat(parts[1]);
    if (isNaN(la0) || isNaN(lo0)) continue;
    seeds.push({ lat: la0, lng: lo0 });
  }
  var sLatMin = Infinity, sLatMax = -Infinity, sLngMin = Infinity, sLngMax = -Infinity;
  seeds.forEach(function(s){
    if (s.lat < sLatMin) sLatMin = s.lat;
    if (s.lat > sLatMax) sLatMax = s.lat;
    if (s.lng < sLngMin) sLngMin = s.lng;
    if (s.lng > sLngMax) sLngMax = s.lng;
  });

  // ---------- 注入「半径设置」卡片（两个下拉） ----------
  (function injectRadiusCard(){
    var modeEl = document.getElementById('mode');
    if (!modeEl) return;
    var modeCard = modeEl.closest('.card');
    var card = document.createElement('div');
    card.className = 'card';
    function optionsHtml(sel){
      return RADIUS_OPTIONS.map(function(r){
        return '<option value="' + r + '"' + (r === sel ? ' selected' : '') + '>' + rlabel(r) + '</option>';
      }).join('');
    }
    card.innerHTML =
      '<div class="row"><label style="width:110px">屏蔽圈半径(193)</label><select id="blockSel">' + optionsHtml(R_BLOCK) + '</select></div>' +
      '<div class="row"><label style="width:110px">外围圈半径</label><select id="outerSel">' + optionsHtml(R_OUTER) + '</select></div>' +
      '<div class="hint">屏蔽圈(红色,#1)固定以 193 Bà Triệu 为圆心；外围圈以它为起点向外蜂窝排布，被屏蔽圈完全盖住的外围圈自动剔除。改半径后立即重画，可在地图上测试不同组合。</div>';
    modeCard.parentNode.insertBefore(card, modeCard);
  })();

  // ---------- 生成蜂窝布局（锚点=193，确定性算法） ----------
  var pts = [];
  var blockPt = null;
  var lats = [], lngs = [];
  var latMin = 0, latMax = 0, lngMin = 0, lngMax = 0;

  function distKmRaw(la1, lo1, la2, lo2){
    var dx = (lo1 - lo2) * KM_LNG;
    var dy = (la1 - la2) * KM_LAT;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function nearSeed(la, lo){
    var lim = R_OUTER * R_OUTER;
    for (var k = 0; k < seeds.length; k++) {
      var dx = (lo - seeds[k].lng) * KM_LNG;
      var dy = (la - seeds[k].lat) * KM_LAT;
      if (dx * dx + dy * dy <= lim) return true;
    }
    return false;
  }
  function generate(){
    var dLat = 1.5 * R_OUTER / KM_LAT;
    var dLng = Math.sqrt(3) * R_OUTER / KM_LNG;
    var iMin = Math.floor((sLatMin - dLat - C193.lat) / dLat);
    var iMax = Math.ceil((sLatMax + dLat - C193.lat) / dLat);
    var jMin = Math.floor((sLngMin - dLng - C193.lng) / dLng);
    var jMax = Math.ceil((sLngMax + dLng - C193.lng) / dLng);
    var out = [];
    for (var i = iMin; i <= iMax; i++) {
      var la = C193.lat + i * dLat;
      var odd = ((i % 2) + 2) % 2 === 1;
      var off = odd ? 0.5 : 0;
      for (var j = jMin; j <= jMax; j++) {
        var lo = C193.lng + (j + off) * dLng;
        if (i === 0 && j === 0) continue;
        if (!nearSeed(la, lo)) continue;
        var dC = distKmRaw(la, lo, C193.lat, C193.lng);
        if (dC + R_OUTER <= R_BLOCK + 1e-9) continue;
        out.push({ lat: la, lng: lo, dC: dC });
      }
    }
    out.sort(function(a, b){ return a.dC - b.dC; });
    pts = out.map(function(o, idx){
      return { id: idx + 2, lat: +o.lat.toFixed(6), lng: +o.lng.toFixed(6), r: R_OUTER, override: null };
    });
    blockPt = { id: 1, lat: +C193.lat.toFixed(6), lng: +C193.lng.toFixed(6), r: R_BLOCK, blocked: true };
    lats = pts.map(function(p){ return p.lat; });
    lngs = pts.map(function(p){ return p.lng; });
    latMin = Math.min.apply(null, lats); latMax = Math.max.apply(null, lats);
    lngMin = Math.min.apply(null, lngs); lngMax = Math.max.apply(null, lngs);
    document.getElementById('total').textContent = (pts.length + 1);
    document.getElementById('rangehint').textContent =
      '屏蔽圈 1 个（#1＝193 Bà Triệu，' + rlabel(R_BLOCK) + '）＋ 外围 ' + pts.length + ' 个（' + rlabel(R_OUTER) + '）｜ 由 ' + seeds.length + ' 个旧1mi圆心定范围';
    updateSubline();
  }

  // ---------- 配置 ----------
  var CENTERS = [
    { name: '11 Thái Hà',   lat: 21.0107, lng: 105.8223 },
    { name: '380 Xã Đàn',   lat: 21.0151, lng: 105.8335 },
    { name: '193 Bà Triệu', lat: 21.0115, lng: 105.8496 }
  ];
  var centerIdx = 0;
  var COLORS = ['#e6194B','#3cb44b','#4363d8','#f58231','#911eb4','#00a5cf','#f032e6','#7f8c00','#9A6324'];
  var BLOCK_COLOR = '#c5221f';
  var GRID_NAMES = ['河内-西北','河内-北','河内-东北','河内-西','河内-中心','河内-东','河内-西南','河内-南','河内-东南'];
  var RING_NAMES = ['河内-核心城区','河内-近郊东北','河内-近郊东南','河内-近郊西南','河内-近郊西北','河内-远郊东北','河内-远郊东南','河内-远郊西南','河内-远郊西北'];
  var MULTI_NAMES = ['Thái Hà-核心','Thái Hà-近郊','Thái Hà-远郊','Xã Đàn-核心','Xã Đàn-近郊','Xã Đàn-远郊','Bà Triệu-核心','Bà Triệu-近郊','Bà Triệu-远郊'];
  var BLOCK_DEFAULT_NAME = '屏蔽-193 Bà Triệu';

  var G = { hlat1: 0, hlat2: 0, vlng1: 0, vlng2: 0 };
  var R = { r1: 8, r2: 20 };
  var mode = 'grid';
  var campaign = {};

  function defNames(){ return mode === 'grid' ? GRID_NAMES : (mode === 'ring' ? RING_NAMES : MULTI_NAMES); }
  function curName(zi){
    var k = mode + '_' + zi;
    return (campaign[k] !== undefined && campaign[k] !== '') ? campaign[k] : defNames()[zi];
  }
  function blockName(){
    return (campaign.block !== undefined && campaign.block !== '') ? campaign.block : BLOCK_DEFAULT_NAME;
  }
  function colorFor(zi){ return COLORS[zi % COLORS.length]; }

  // ---------- 分区逻辑 ----------
  function quantile(sorted, q){
    var pos = (sorted.length - 1) * q, base = Math.floor(pos), rest = pos - base;
    return sorted[base + 1] !== undefined ? sorted[base] + rest * (sorted[base + 1] - sorted[base]) : sorted[base];
  }
  function balanceGrid(){
    var sl = lats.slice().sort(function(a,b){ return a - b; });
    var sg = lngs.slice().sort(function(a,b){ return a - b; });
    G.hlat1 = quantile(sl, 1/3); G.hlat2 = quantile(sl, 2/3);
    G.vlng1 = quantile(sg, 1/3); G.vlng2 = quantile(sg, 2/3);
  }
  function assignGrid(lat, lng){
    var r = (lat >= G.hlat2) ? 0 : (lat >= G.hlat1 ? 1 : 2);
    var c = (lng <  G.vlng1) ? 0 : (lng <  G.vlng2 ? 1 : 2);
    return r * 3 + c;
  }
  function assignRing(lat, lng){
    var C = CENTERS[centerIdx];
    var dx = (lng - C.lng) * Math.cos(C.lat * Math.PI / 180) * 111.32;
    var dy = (lat - C.lat) * 110.57;
    var dist = Math.sqrt(dx*dx + dy*dy);
    if (dist < R.r1) return 0;
    var quad = (dx >= 0 && dy >= 0) ? 0 : (dx >= 0 && dy < 0) ? 1 : (dx < 0 && dy < 0) ? 2 : 3;
    return (dist < R.r2 ? 1 : 5) + quad;
  }
  function distKm(lat, lng, C){
    var dx = (lng - C.lng) * Math.cos(C.lat * Math.PI / 180) * 111.32;
    var dy = (lat - C.lat) * 110.57;
    return Math.sqrt(dx*dx + dy*dy);
  }
  function assignMulti(lat, lng){
    var best = 0, bd = Infinity;
    for (var ci = 0; ci < CENTERS.length; ci++) {
      var d = distKm(lat, lng, CENTERS[ci]);
      if (d < bd) { bd = d; best = ci; }
    }
    return best * 3 + (bd < R.r1 ? 0 : (bd < R.r2 ? 1 : 2));
  }
  function assignZone(p){
    if (p.override !== null && p.override !== undefined) return p.override;
    if (mode === 'grid') return assignGrid(p.lat, p.lng);
    if (mode === 'ring') return assignRing(p.lat, p.lng);
    return assignMulti(p.lat, p.lng);
  }

  // ---------- 地图 ----------
  var map = L.map('map');
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  var circleLayer = L.layerGroup().addTo(map);
  var lineLayer = L.layerGroup().addTo(map);
  var seedLayer = L.layerGroup();
  var searchLayer = L.layerGroup().addTo(map);
  var lastCoordQuery = null;

  seeds.forEach(function(s){
    seedLayer.addLayer(L.circleMarker([s.lat, s.lng], { radius: 2.5, color: '#555', fillColor: '#555', fillOpacity: 0.8, weight: 0 }));
  });
  var seedsToggle = document.getElementById('showSeeds');
  if (seedsToggle) seedsToggle.addEventListener('change', function(e){
    if (e.target.checked) seedLayer.addTo(map); else map.removeLayer(seedLayer);
  });

  function drawLines(){
    lineLayer.clearLayers();
    if (mode === 'grid') {
      [G.hlat1, G.hlat2].forEach(function(la){
        L.polyline([[la, lngMin - 0.06], [la, lngMax + 0.06]], { color:'#222', weight:1.5, dashArray:'6,5', opacity:.75 }).addTo(lineLayer);
      });
      [G.vlng1, G.vlng2].forEach(function(lo){
        L.polyline([[latMin - 0.06, lo], [latMax + 0.06, lo]], { color:'#222', weight:1.5, dashArray:'6,5', opacity:.75 }).addTo(lineLayer);
      });
    } else if (mode === 'ring') {
      var C = CENTERS[centerIdx];
      L.circle([C.lat, C.lng], { radius: R.r1 * 1000, color:'#222', weight:1.5, fill:false, dashArray:'6,5' }).addTo(lineLayer);
      L.circle([C.lat, C.lng], { radius: R.r2 * 1000, color:'#222', weight:1.5, fill:false, dashArray:'6,5' }).addTo(lineLayer);
      L.circleMarker([C.lat, C.lng], { radius:5, color:'#c5221f', fillColor:'#c5221f', fillOpacity:1 }).bindTooltip('中心：' + C.name).addTo(lineLayer);
    } else {
      CENTERS.forEach(function(C){
        L.circle([C.lat, C.lng], { radius: R.r1 * 1000, color:'#222', weight:1.5, fill:false, dashArray:'6,5' }).addTo(lineLayer);
        L.circle([C.lat, C.lng], { radius: R.r2 * 1000, color:'#222', weight:1.5, fill:false, dashArray:'6,5' }).addTo(lineLayer);
        L.circleMarker([C.lat, C.lng], { radius:5, color:'#c5221f', fillColor:'#c5221f', fillOpacity:1 }).bindTooltip('中心：' + C.name).addTo(lineLayer);
      });
    }
  }

  function render(){
    circleLayer.clearLayers();
    var bc = L.circle([blockPt.lat, blockPt.lng], { radius: blockPt.r * 1000, color: BLOCK_COLOR, weight: 2.5, fillColor: BLOCK_COLOR, fillOpacity: 0.18, dashArray: '4,4' });
    bc.bindTooltip('#1 屏蔽圈 · ' + blockName() + '（193 Bà Triệu，' + rlabel(blockPt.r) + '）', { sticky: true });
    circleLayer.addLayer(bc);
    circleLayer.addLayer(L.circleMarker([blockPt.lat, blockPt.lng], { radius: 4, color: BLOCK_COLOR, fillColor: BLOCK_COLOR, fillOpacity: 1 }));
    var counts = [0,0,0,0,0,0,0,0,0];
    for (var i = 0; i < pts.length; i++) {
      (function(p){
        var zi = assignZone(p);
        counts[zi]++;
        var col = colorFor(zi);
        var c = L.circle([p.lat, p.lng], { radius: p.r * 1000, color: col, weight: 1, fillColor: col, fillOpacity: 0.3 });
        c.bindTooltip('#' + p.id + ' · ' + curName(zi) + (p.override !== null ? '（手动）' : ''), { sticky: true });
        c.on('click', function(){ openReassign(p); });
        circleLayer.addLayer(c);
      })(pts[i]);
    }
    var assigned = counts.reduce(function(a,b){ return a + b; }, 0) + 1;
    document.getElementById('assigned').textContent = assigned;
    document.getElementById('checkmark').innerHTML = (assigned === pts.length + 1)
      ? '<span class="ok">✓ 全部已分配</span>' : '<span class="warn">⚠ 数量不符！</span>';
    drawLines();
    renderZones(counts);
    refreshCoordSearch();
  }

  function renderZones(counts){
    var box = document.getElementById('zones');
    box.innerHTML = '';
    var bdiv = document.createElement('div'); bdiv.className = 'zone';
    var bsw = document.createElement('span'); bsw.className = 'sw'; bsw.style.background = BLOCK_COLOR; bdiv.appendChild(bsw);
    var binp = document.createElement('input'); binp.type = 'text'; binp.value = blockName();
    binp.addEventListener('input', function(){ campaign.block = binp.value; });
    bdiv.appendChild(binp);
    var bcnt = document.createElement('span'); bcnt.className = 'cnt'; bcnt.textContent = '1'; bdiv.appendChild(bcnt);
    var bcp = document.createElement('button'); bcp.className = 'mini'; bcp.textContent = '复制';
    bcp.addEventListener('click', function(){ copyBlock(); });
    bdiv.appendChild(bcp);
    box.appendChild(bdiv);
    for (var zi = 0; zi < 9; zi++) {
      (function(z){
        var div = document.createElement('div'); div.className = 'zone';
        var sw = document.createElement('span'); sw.className = 'sw'; sw.style.background = colorFor(z); div.appendChild(sw);
        var inp = document.createElement('input'); inp.type = 'text'; inp.value = curName(z);
        inp.addEventListener('input', function(){ campaign[mode + '_' + z] = inp.value; });
        div.appendChild(inp);
        var cnt = document.createElement('span'); cnt.className = 'cnt'; cnt.textContent = counts[z];
        if (counts[z] > 500) cnt.style.color = '#c5221f';
        div.appendChild(cnt);
        var cp = document.createElement('button'); cp.className = 'mini'; cp.textContent = '复制';
        cp.addEventListener('click', function(){ copyZone(z); });
        div.appendChild(cp);
        box.appendChild(div);
      })(zi);
    }
  }

  function openReassign(p){
    var zi = assignZone(p);
    var html = '<div style="font-size:12px">圈 #' + p.id + '（当前：' + curName(zi) + '）<br>改到：<select id="reSel" style="margin-top:4px">';
    for (var z = 0; z < 9; z++) html += '<option value="' + z + '"' + (z === zi ? ' selected' : '') + '>' + curName(z) + '</option>';
    html += '</select><br><button id="reBtn" class="mini" style="margin-top:6px">确定</button> <button id="reClr" class="mini" style="margin-top:6px">恢复自动</button></div>';
    var pop = L.popup().setLatLng([p.lat, p.lng]).setContent(html).openOn(map);
    setTimeout(function(){
      var b = document.getElementById('reBtn');
      var cl = document.getElementById('reClr');
      if (b) b.onclick = function(){ p.override = parseInt(document.getElementById('reSel').value, 10); map.closePopup(); render(); };
      if (cl) cl.onclick = function(){ p.override = null; map.closePopup(); render(); };
    }, 30);
  }

  // ---------- 导出 ----------
  function locStr(p){ return '(' + rlabel(p.r) + ':' + p.lat.toFixed(6) + ':' + p.lng.toFixed(6) + ')'; }
  function buildRows(){
    var rows = [{ ID: 1, 分区: blockName(), Campaign: blockName(), Location: locStr(blockPt), Latitude: blockPt.lat, Longitude: blockPt.lng }];
    pts.forEach(function(p){
      var zi = assignZone(p);
      rows.push({ ID: p.id, 分区: curName(zi), Campaign: curName(zi), Location: locStr(p), Latitude: p.lat, Longitude: p.lng });
    });
    return rows;
  }
  function sanitizeSheet(name, used){
    var s = String(name || '区').replace(/[\[\]\:\*\?\/\\]/g, ' ').trim().slice(0, 28) || '区';
    var base = s, k = 1;
    while (used[s]) s = base + '_' + (k++);
    used[s] = true; return s;
  }
  function exportXlsx(){
    if (typeof XLSX === 'undefined') { alert('Excel 组件未加载成功，请确认联网后刷新页面重试；或先用「导出 CSV」。'); return; }
    var rows = buildRows();
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(rows, { header: ['ID','分区','Campaign','Location','Latitude','Longitude'] });
    XLSX.utils.book_append_sheet(wb, ws, '明细_全部');
    var imp = rows.map(function(r){ return { Campaign: r.Campaign, Location: r.Location }; });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(imp, { header: ['Campaign','Location'] }), '导入_全部');
    var groups = {};
    rows.forEach(function(r){ (groups[r.Campaign] = groups[r.Campaign] || []).push(r); });
    var used = { '明细_全部': true, '导入_全部': true };
    Object.keys(groups).forEach(function(g){
      var gr = groups[g].map(function(r){ return { Campaign: r.Campaign, Location: r.Location }; });
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(gr, { header: ['Campaign','Location'] }), sanitizeSheet(g, used));
    });
    XLSX.writeFile(wb, '河内广告圈_屏蔽' + rlabel(R_BLOCK) + '_外围' + rlabel(R_OUTER) + '_' + stamp() + '.xlsx');
  }
  function exportCsv(){
    var rows = buildRows();
    var head = ['ID','分区','Campaign','Location','Latitude','Longitude'];
    var lines = [head.join(',')];
    rows.forEach(function(r){
      lines.push([r.ID, q(r.分区), q(r.Campaign), q(r.Location), r.Latitude, r.Longitude].join(','));
    });
    dl(new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' }), '河内广告圈_屏蔽' + rlabel(R_BLOCK) + '_外围' + rlabel(R_OUTER) + '_' + stamp() + '.csv');
  }
  function copyBlock(){
    var tsv = 'Campaign\tLocation\n' + blockName() + '\t' + locStr(blockPt);
    doCopy(tsv, blockName(), 1);
  }
  function copyZone(zi){
    var name = curName(zi);
    var rows = pts.filter(function(p){ return assignZone(p) === zi; });
    if (!rows.length) { flash('该区暂无圆圈'); return; }
    var tsv = 'Campaign\tLocation\n' + rows.map(function(p){ return name + '\t' + locStr(p); }).join('\n');
    doCopy(tsv, name, rows.length);
  }
  function doCopy(tsv, name, n){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(tsv).then(
        function(){ flash('已复制「' + name + '」' + n + ' 行（Campaign+Location）'); },
        function(){ fallbackCopy(tsv, name, n); }
      );
    } else { fallbackCopy(tsv, name, n); }
  }
  function fallbackCopy(text, name, n){
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.cssText = 'position:fixed;left:-9999px;';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); flash('已复制「' + name + '」' + n + ' 行'); }
    catch(e){ alert('复制失败，请改用导出 Excel/CSV。'); }
    ta.remove();
  }
  function q(s){ s = String(s); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
  function dl(blob, name){
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1500);
  }
  function stamp(){ var d = new Date(); function z(n){ return (n < 10 ? '0' : '') + n; } return d.getFullYear() + z(d.getMonth() + 1) + z(d.getDate()); }
  function flash(msg){
    var el = document.createElement('div'); el.textContent = msg;
    el.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#323232;color:#fff;padding:8px 14px;border-radius:6px;font-size:13px;z-index:9999;';
    document.body.appendChild(el); setTimeout(function(){ el.remove(); }, 2000);
  }

  // ---------- 坐标检索 ----------
  function isLat(v){ return isFinite(v) && Math.abs(v) <= 90; }
  function isLng(v){ return isFinite(v) && Math.abs(v) <= 180; }
  function asLatLng(a, b){
    if (isLat(a) && isLng(b)) return { lat: a, lng: b };
    if (isLat(b) && isLng(a)) return { lat: b, lng: a };
    return null;
  }
  function parseCoordInput(text){
    var nums = (String(text || '').match(/-?\d+(?:\.\d+)?/g) || []).map(function(n){ return parseFloat(n); });
    if (nums.length < 2) return null;
    var pairs = [];
    if (nums.length >= 3) {
      if (Math.abs(nums[0]) <= 10) pairs.push([nums[1], nums[2]]);
      pairs.push([nums[nums.length - 2], nums[nums.length - 1]]);
      pairs.push([nums[1], nums[2]]);
    }
    pairs.push([nums[0], nums[1]]);
    for (var i = 0; i < pairs.length; i++) {
      var p = asLatLng(pairs[i][0], pairs[i][1]);
      if (p) return p;
    }
    return null;
  }
  function circleInfoForPoint(lat, lng){
    var hits = [];
    function addHit(p, isBlock){
      var d = distKmRaw(lat, lng, p.lat, p.lng);
      if (d <= p.r + 1e-9) {
        var zi = isBlock ? null : assignZone(p);
        hits.push({
          point: p,
          isBlock: isBlock,
          zone: zi,
          name: isBlock ? blockName() : curName(zi),
          color: isBlock ? BLOCK_COLOR : colorFor(zi),
          dist: d
        });
      }
    }
    addHit(blockPt, true);
    pts.forEach(function(p){ addHit(p, false); });
    hits.sort(function(a, b){ return a.dist - b.dist; });
    return hits;
  }
  function nearestCircleForPoint(lat, lng){
    var best = null;
    function test(p, isBlock){
      var d = distKmRaw(lat, lng, p.lat, p.lng);
      var edge = Math.max(0, d - p.r);
      if (!best || edge < best.edge) {
        var zi = isBlock ? null : assignZone(p);
        best = {
          point: p,
          isBlock: isBlock,
          zone: zi,
          name: isBlock ? blockName() : curName(zi),
          color: isBlock ? BLOCK_COLOR : colorFor(zi),
          dist: d,
          edge: edge
        };
      }
    }
    test(blockPt, true);
    pts.forEach(function(p){ test(p, false); });
    return best;
  }
  function formatKm(v){ return Number(v).toFixed(2) + 'km'; }
  function renderCoordResult(lat, lng, hits, nearest){
    var box = document.getElementById('coordResult');
    if (!box) return;
    box.innerHTML = '';
    var head = document.createElement('div');
    head.textContent = '检索坐标：' + lat.toFixed(6) + ', ' + lng.toFixed(6);
    box.appendChild(head);
    if (!hits.length) {
      var miss = document.createElement('div');
      miss.className = 'warn';
      miss.textContent = '未落入任何当前圆圈。';
      box.appendChild(miss);
      if (nearest) {
        var near = document.createElement('div');
        near.className = 'coord-hit';
        near.style.borderColor = nearest.color;
        near.textContent = '最近圆圈：#' + nearest.point.id + ' · ' + nearest.name + '｜距圆心 ' + formatKm(nearest.dist) + '，距圆边约 ' + formatKm(nearest.edge);
        box.appendChild(near);
      }
      return;
    }
    var summary = document.createElement('div');
    summary.className = 'ok';
    summary.textContent = '命中 ' + hits.length + ' 个圆圈（圆圈重叠时会列出全部）。';
    box.appendChild(summary);
    hits.forEach(function(hit){
      var div = document.createElement('div');
      div.className = 'coord-hit';
      div.style.borderColor = hit.color;
      var title = document.createElement('b');
      title.textContent = '#' + hit.point.id + ' · ' + hit.name;
      div.appendChild(title);
      var meta = document.createElement('div');
      meta.textContent =
        (hit.isBlock ? '屏蔽圈/排除位置' : '投放圈 · 当前分区') +
        '｜半径 ' + rlabel(hit.point.r) +
        '｜距圆心 ' + formatKm(hit.dist) +
        '｜' + locStr(hit.point);
      div.appendChild(meta);
      box.appendChild(div);
    });
  }
  function drawCoordSearch(lat, lng, hits, focusMap){
    searchLayer.clearLayers();
    var marker = L.circleMarker([lat, lng], {
      radius: 6,
      color: '#111',
      weight: 2,
      fillColor: '#ffd166',
      fillOpacity: 1
    }).addTo(searchLayer);
    var popupText = hits.length
      ? ('命中 ' + hits.length + ' 个圆圈：' + hits.map(function(h){ return '#' + h.point.id; }).join(', '))
      : '未落入任何当前圆圈';
    marker.bindPopup(popupText).openPopup();
    var bounds = L.latLngBounds([[lat, lng], [lat, lng]]);
    hits.forEach(function(hit){
      var c = L.circle([hit.point.lat, hit.point.lng], {
        radius: hit.point.r * 1000,
        color: hit.color,
        weight: 4,
        fillColor: hit.color,
        fillOpacity: 0.08,
        dashArray: '8,4'
      }).addTo(searchLayer);
      bounds.extend(c.getBounds());
    });
    if (focusMap) {
      if (hits.length) map.fitBounds(bounds, { padding: [30, 30], maxZoom: 13 });
      else map.setView([lat, lng], Math.max(map.getZoom(), 12));
    }
  }
  function runCoordSearch(focusMap){
    var input = document.getElementById('coordInput');
    var result = document.getElementById('coordResult');
    if (!input || !result) return;
    var parsed = parseCoordInput(input.value);
    if (!parsed) {
      lastCoordQuery = null;
      searchLayer.clearLayers();
      result.innerHTML = '<span class="warn">无法识别坐标。请输入“纬度,经度”，或粘贴类似 (3km:21.011500:105.849600) 的 Location 字符串。</span>';
      return;
    }
    lastCoordQuery = parsed;
    var hits = circleInfoForPoint(parsed.lat, parsed.lng);
    renderCoordResult(parsed.lat, parsed.lng, hits, nearestCircleForPoint(parsed.lat, parsed.lng));
    drawCoordSearch(parsed.lat, parsed.lng, hits, focusMap);
  }
  function refreshCoordSearch(){
    if (!lastCoordQuery) return;
    runCoordSearch(false);
  }
  function clearCoordSearch(){
    lastCoordQuery = null;
    searchLayer.clearLayers();
    var input = document.getElementById('coordInput');
    var result = document.getElementById('coordResult');
    if (input) input.value = '';
    if (result) result.textContent = '会按当前半径、分区模式和手动调整结果判断。';
  }

  // ---------- 滑块 ----------
  function setupSlider(id, min, max, step, getter, setter, fmt){
    var el = document.getElementById(id), lab = document.getElementById(id + 'v');
    el.min = min; el.max = max; el.step = step; el.value = getter();
    if (lab) lab.textContent = fmt(getter());
    el.addEventListener('input', function(){
      setter(parseFloat(el.value));
      if (lab) lab.textContent = fmt(parseFloat(el.value));
      render();
    });
  }
  function f4(v){ return Number(v).toFixed(4); }
  function f1(v){ return Number(v).toFixed(1) + 'km'; }
  function initGridSliders(){
    setupSlider('hlat1', latMin, latMax, 0.001, function(){ return G.hlat1; }, function(v){ G.hlat1 = Math.min(v, G.hlat2 - 0.001); }, f4);
    setupSlider('hlat2', latMin, latMax, 0.001, function(){ return G.hlat2; }, function(v){ G.hlat2 = Math.max(v, G.hlat1 + 0.001); }, f4);
    setupSlider('vlng1', lngMin, lngMax, 0.001, function(){ return G.vlng1; }, function(v){ G.vlng1 = Math.min(v, G.vlng2 - 0.001); }, f4);
    setupSlider('vlng2', lngMin, lngMax, 0.001, function(){ return G.vlng2; }, function(v){ G.vlng2 = Math.max(v, G.vlng1 + 0.001); }, f4);
  }
  function refreshGridSliderBounds(){
    ['hlat1','hlat2','vlng1','vlng2'].forEach(function(id){
      var el = document.getElementById(id);
      el.min = (id.charAt(0) === 'h') ? latMin : lngMin;
      el.max = (id.charAt(0) === 'h') ? latMax : lngMax;
      el.value = G[id];
      var lab = document.getElementById(id + 'v'); if (lab) lab.textContent = f4(G[id]);
    });
  }
  function initRingSliders(){
    setupSlider('r1', 1, 40, 0.5, function(){ return R.r1; }, function(v){ R.r1 = Math.min(v, R.r2 - 0.5); }, f1);
    setupSlider('r2', 2, 60, 0.5, function(){ return R.r2; }, function(v){ R.r2 = Math.max(v, R.r1 + 0.5); }, f1);
  }
  function syncRingSliders(){
    var e1 = document.getElementById('r1'); e1.value = R.r1; document.getElementById('r1v').textContent = f1(R.r1);
    var e2 = document.getElementById('r2'); e2.value = R.r2; document.getElementById('r2v').textContent = f1(R.r2);
  }

  // ---------- 事件 ----------
  function regenerateAll(){
    generate();
    balanceGrid();
    refreshGridSliderBounds();
    render();
  }
  document.getElementById('blockSel').addEventListener('change', function(e){
    R_BLOCK = parseFloat(e.target.value);
    regenerateAll();
  });
  document.getElementById('outerSel').addEventListener('change', function(e){
    R_OUTER = parseFloat(e.target.value);
    regenerateAll();
  });
  document.getElementById('mode').addEventListener('change', function(e){
    mode = e.target.value;
    pts.forEach(function(p){ p.override = null; });
    document.getElementById('gridctrl').style.display = mode === 'grid' ? 'block' : 'none';
    document.getElementById('ringctrl').style.display = mode === 'grid' ? 'none' : 'block';
    document.getElementById('centerRow').style.display = mode === 'ring' ? 'flex' : 'none';
    render();
  });
  document.getElementById('centerSel').addEventListener('change', function(e){
    centerIdx = parseInt(e.target.value, 10);
    pts.forEach(function(p){ p.override = null; });
    render();
  });
  document.getElementById('balance').addEventListener('click', function(){ balanceGrid(); refreshGridSliderBounds(); render(); });
  document.getElementById('exportXlsx').addEventListener('click', exportXlsx);
  document.getElementById('exportCsv').addEventListener('click', exportCsv);
  document.getElementById('coordSearch').addEventListener('click', function(){ runCoordSearch(true); });
  document.getElementById('coordClear').addEventListener('click', clearCoordSearch);
  document.getElementById('coordInput').addEventListener('keydown', function(e){
    if (e.key === 'Enter') runCoordSearch(true);
  });
  document.getElementById('reset').addEventListener('click', function(){
    campaign = {};
    R = { r1: 8, r2: 20 }; centerIdx = 0;
    document.getElementById('centerSel').value = '0';
    R_BLOCK = R_BLOCK_INIT; R_OUTER = R_OUTER_INIT;
    document.getElementById('blockSel').value = String(R_BLOCK);
    document.getElementById('outerSel').value = String(R_OUTER);
    syncRingSliders();
    regenerateAll();
  });

  // ---------- 启动 ----------
  generate();
  balanceGrid();
  initGridSliders();
  initRingSliders();
  map.fitBounds([[latMin, lngMin], [latMax, lngMax]], { padding: [20, 20] });
  render();
})();
