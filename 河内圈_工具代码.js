(function(){
  "use strict";
  var UI = {
    zh: {
      appTitle: '河内广告圈 · 分区工具（{anchor}屏蔽＋蜂窝）',
      langLabel: '语言',
      langAuto: '自动',
      langZh: '中文',
      langVi: 'Tiếng Việt',
      totalLabel: '总圈数',
      assignedLabel: '已分配',
      showSeedsPrefix: '显示旧圈对照：',
      showSeedsLabel: '叠加显示原1mi圆心(灰点)',
      modeLabel: '分区模式',
      modeGrid: '方位 3×3 网格（西北…中心…东南）',
      modeRing: '圈层＋方位（单中心：核心/近郊/远郊×四向）',
      modeMulti: '三中心圈层（按最近中心：Thái Hà/Xã Đàn/Bà Triệu）',
      hlat1Label: '南北分界·下',
      hlat2Label: '南北分界·上',
      vlng1Label: '东西分界·左',
      vlng2Label: '东西分界·右',
      balance: '按数量自动均衡分界线',
      centerLabel: '圆心',
      r1Label: '核心半径 km',
      r2Label: '近郊半径 km',
      ringHint: '单中心模式：按上方所选圆心，核心一组，核心以外按 东北/东南/西南/西北 ×（近郊/远郊）分组。<br>三中心模式：每个圈划给最近的中心（Thái Hà / Xã Đàn / Bà Triệu），再按 核心/近郊/远郊 分档，共9组；三中心相距仅1–3km，建议把核心半径调小到2–3km。',
      zonesTitle: '分区 ＝ 广告系列名（可直接改名；两区改成同名即合并为一组）',
      zonesHint: '第一行红色＝屏蔽圈组；第二行红色＝可自选多个外围圈组成的附加屏蔽组。点击地图圆圈可加入/移出附加屏蔽组。导入 Google Ads 后请把屏蔽组设为<b>排除位置</b>。「复制」＝复制该区 Campaign + Location 两列。',
      coordTitle: '坐标检索',
      coordPlaceholder: '输入或粘贴坐标，例如 21.0115,105.8496',
      coordSearch: '查找所在圆圈',
      coordClear: '清除',
      coordDefault: '会按当前半径、分区模式和手动调整结果判断。',
      coordHint: '支持模糊粘贴：Google Ads Location、Google Maps 链接、lat/lng 文本、空格/分号分隔、经纬度反序。例如 <b>(3km:21.011500:105.849600)</b>。',
      exportXlsx: '⬇ 导出 Excel（.xlsx，每区一个工作表）',
      exportCsv: '⬇ 导出 CSV（全部明细）',
      exportHint: '导入方法：Google Ads Editor → Keywords &amp; Targeting → <b>Locations</b> → <b>Make multiple changes</b> → 勾选 “My data includes columns for campaigns…” → 粘贴某区的 Campaign+Location 两列 → Process。屏蔽圈请改在 <b>Negative locations（排除位置）</b>里添加同一坐标串。<br>注意：每个广告系列最多 500 个位置定位。',
      footerHint: '提示：点击地图上任意圆圈，可单独把它改到别的分区（处理边界圈）。鼠标悬停可看编号与归属。',
      reset: '重置全部调整',
      blockRadiusLabel: '屏蔽圈半径',
      outerRadiusLabel: '外围圈半径',
      radiusHint: '红色屏蔽圈可由一个或多个小圆组成；外围圈以 {anchor} 为起点向外蜂窝排布，被屏蔽圈完全盖住的外围圈自动剔除。改半径后立即重画，可在地图上测试不同组合。',
      allAssigned: '✓ 全部已分配',
      countMismatch: '⚠ 数量不符！',
      blockDefaultName: '屏蔽-{anchor}',
      extraBlockDefaultName: '屏蔽-附加圈',
      copy: '复制',
      copyLocation: '复制坐标',
      addExtraBlock: '加入附加屏蔽',
      removeExtraBlock: '移出附加屏蔽',
      extraBlockMeta: '自定义附加屏蔽组',
      locationLabel: '坐标',
      copiedCampaignRows: '已复制「{name}」{n} 行（Campaign+Location）',
      copiedRows: '已复制「{name}」{n} 行',
      copiedLocation: '已复制坐标：{location}',
      emptyZone: '该区暂无圆圈',
      emptyExtraBlock: '附加屏蔽组暂无圆圈',
      copyFailed: '复制失败，请改用导出 Excel/CSV。',
      xlsxMissing: 'Excel 组件未加载成功，请刷新页面重试；或先用「导出 CSV」。',
      coordParseFailed: '无法识别坐标。可输入“纬度,经度”，或粘贴 Google Maps 链接、lat/lng 文本、Google Ads Location 字符串。',
      coordSearched: '检索坐标：{lat}, {lng}',
      coordMiss: '未落入任何当前圆圈。',
      coordNearest: '最近圆圈：#{id} · {name}｜距圆心 {dist}，距圆边约 {edge}',
      coordHitSummary: '命中 {n} 个圆圈（圆圈重叠时会列出全部）。',
      coordPopupHit: '命中 {n} 个圆圈：{ids}',
      coordPopupMiss: '未落入任何当前圆圈',
      blockCircle: '屏蔽圈/排除位置',
      adCircleZone: '投放圈 · 当前分区',
      radius: '半径',
      distCenter: '距圆心',
      blockTooltip: '屏蔽圈 · {name}（{anchor}，{radius}）',
      circleTooltip: '#{id} · {name}{manual}<br>{location}',
      centerTooltip: '中心：{name}',
      manual: '（手动）',
      reassignCurrent: '圈 #{id}（当前：{name}）',
      reassignTo: '改到：',
      confirm: '确定',
      clearAuto: '恢复自动',
      rangeHint: '屏蔽圈 {blockCount} 个（{blockRadius}）＋ 外围 {outerCount} 个（{outerRadius}）｜ 蜂窝锚点={anchor}｜由 {seedCount} 个旧1mi圆心定范围',
      subline: '屏蔽圈：{blockCount} 个红色排除位置，当前半径 {blockRadius}。外围投放圈：半径 {outerRadius}，以 {anchor} 为起点蜂窝排布（间距 √3×{outer}≈{spacing}km，行距 {rowSpacing}km），覆盖范围对齐原 {seedCount} 个 1mi 手工圈。',
      detailAll: '明细_全部',
      importAll: '导入_全部',
      sheetFallback: '区',
      filePrefix: '河内广告圈_屏蔽{blockRadius}_外围{outerRadius}_{stamp}',
      gridNames: ['河内-西北','河内-北','河内-东北','河内-西','河内-中心','河内-东','河内-西南','河内-南','河内-东南'],
      ringNames: ['河内-核心城区','河内-近郊东北','河内-近郊东南','河内-近郊西南','河内-近郊西北','河内-远郊东北','河内-远郊东南','河内-远郊西南','河内-远郊西北'],
      multiNames: ['Thái Hà-核心','Thái Hà-近郊','Thái Hà-远郊','Xã Đàn-核心','Xã Đàn-近郊','Xã Đàn-远郊','Bà Triệu-核心','Bà Triệu-近郊','Bà Triệu-远郊']
    },
    vi: {
      appTitle: 'Công cụ chia vùng vòng tròn quảng cáo Hà Nội ({anchor})',
      langLabel: 'Ngôn ngữ',
      langAuto: 'Tự động',
      langZh: '中文',
      langVi: 'Tiếng Việt',
      totalLabel: 'Tổng vòng',
      assignedLabel: 'Đã phân vùng',
      showSeedsPrefix: 'Đối chiếu vòng cũ:',
      showSeedsLabel: 'Hiển thị tâm vòng 1mi gốc (điểm xám)',
      modeLabel: 'Chế độ chia vùng',
      modeGrid: 'Lưới 3×3 theo hướng (Tây Bắc…Trung tâm…Đông Nam)',
      modeRing: 'Vành đai + hướng (một tâm: lõi/cận đô/xa × 4 hướng)',
      modeMulti: 'Ba tâm vành đai (theo tâm gần nhất: Thái Hà/Xã Đàn/Bà Triệu)',
      hlat1Label: 'Ranh Nam/Bắc dưới',
      hlat2Label: 'Ranh Nam/Bắc trên',
      vlng1Label: 'Ranh Đông/Tây trái',
      vlng2Label: 'Ranh Đông/Tây phải',
      balance: 'Tự cân bằng ranh giới theo số lượng',
      centerLabel: 'Tâm',
      r1Label: 'Bán kính lõi km',
      r2Label: 'Bán kính cận đô km',
      ringHint: 'Chế độ một tâm: nhóm lõi riêng; ngoài lõi chia theo Đông Bắc/Đông Nam/Tây Nam/Tây Bắc × cận đô/xa.<br>Chế độ ba tâm: mỗi vòng thuộc về tâm gần nhất (Thái Hà / Xã Đàn / Bà Triệu), rồi chia lõi/cận đô/xa, tổng 9 nhóm; ba tâm chỉ cách nhau 1–3km, nên đặt bán kính lõi khoảng 2–3km.',
      zonesTitle: 'Vùng = tên chiến dịch (có thể đổi tên; đặt trùng tên để gộp vùng)',
      zonesHint: 'Dòng đỏ đầu tiên là nhóm vòng chặn; dòng đỏ thứ hai là nhóm chặn bổ sung do bạn tự chọn từ các vòng ngoài. Bấm vòng trên bản đồ để thêm/bỏ khỏi nhóm chặn bổ sung. Khi nhập vào Google Ads, hãy đặt các nhóm chặn trong <b>vị trí loại trừ</b>. Nút Sao chép sẽ sao chép hai cột Campaign + Location.',
      coordTitle: 'Tra cứu tọa độ',
      coordPlaceholder: 'Nhập hoặc dán tọa độ, ví dụ 21.0115,105.8496',
      coordSearch: 'Tìm vòng chứa tọa độ',
      coordClear: 'Xóa',
      coordDefault: 'Kết quả dùng bán kính, chế độ chia vùng và chỉnh tay hiện tại.',
      coordHint: 'Hỗ trợ dán linh hoạt: Google Ads Location, link Google Maps, chữ lat/lng, phân tách bằng dấu cách/dấu chấm phẩy, hoặc đảo thứ tự kinh/vĩ độ. Ví dụ <b>(3km:21.011500:105.849600)</b>.',
      exportXlsx: '⬇ Xuất Excel (.xlsx, mỗi vùng một sheet)',
      exportCsv: '⬇ Xuất CSV (toàn bộ chi tiết)',
      exportHint: 'Cách nhập: Google Ads Editor → Keywords &amp; Targeting → <b>Locations</b> → <b>Make multiple changes</b> → chọn “My data includes columns for campaigns…” → dán hai cột Campaign+Location của từng vùng → Process. Vòng chặn cần thêm cùng chuỗi tọa độ trong <b>Negative locations</b>.<br>Lưu ý: mỗi chiến dịch tối đa 500 vị trí nhắm mục tiêu.',
      footerHint: 'Gợi ý: bấm một vòng bất kỳ trên bản đồ để chuyển riêng vòng đó sang vùng khác. Di chuột để xem mã vòng và vùng.',
      reset: 'Đặt lại toàn bộ chỉnh sửa',
      blockRadiusLabel: 'Bán kính chặn',
      outerRadiusLabel: 'Bán kính vòng ngoài',
      radiusHint: 'Vòng chặn màu đỏ có thể gồm một hoặc nhiều vòng nhỏ; các vòng ngoài được xếp dạng tổ ong từ {anchor}. Vòng ngoài bị vòng chặn phủ hoàn toàn sẽ bị loại. Đổi bán kính sẽ vẽ lại ngay.',
      allAssigned: '✓ Đã phân vùng toàn bộ',
      countMismatch: '⚠ Số lượng không khớp!',
      blockDefaultName: 'Chặn-{anchor}',
      extraBlockDefaultName: 'Chặn-bổ sung',
      copy: 'Sao chép',
      copyLocation: 'Sao chép tọa độ',
      addExtraBlock: 'Thêm vào chặn bổ sung',
      removeExtraBlock: 'Bỏ khỏi chặn bổ sung',
      extraBlockMeta: 'Nhóm chặn bổ sung tùy chọn',
      locationLabel: 'Tọa độ',
      copiedCampaignRows: 'Đã sao chép “{name}” {n} dòng (Campaign+Location)',
      copiedRows: 'Đã sao chép “{name}” {n} dòng',
      copiedLocation: 'Đã sao chép tọa độ: {location}',
      emptyZone: 'Vùng này chưa có vòng nào',
      emptyExtraBlock: 'Nhóm chặn bổ sung chưa có vòng nào',
      copyFailed: 'Sao chép thất bại, hãy dùng xuất Excel/CSV.',
      xlsxMissing: 'Thành phần Excel chưa tải được, hãy tải lại trang hoặc dùng xuất CSV.',
      coordParseFailed: 'Không nhận diện được tọa độ. Có thể nhập “vĩ độ, kinh độ”, hoặc dán link Google Maps, chữ lat/lng, chuỗi Google Ads Location.',
      coordSearched: 'Tọa độ tra cứu: {lat}, {lng}',
      coordMiss: 'Không nằm trong vòng hiện tại nào.',
      coordNearest: 'Vòng gần nhất: #{id} · {name}｜cách tâm {dist}, cách mép vòng khoảng {edge}',
      coordHitSummary: 'Trúng {n} vòng (nếu các vòng chồng lấn, tất cả sẽ được liệt kê).',
      coordPopupHit: 'Trúng {n} vòng: {ids}',
      coordPopupMiss: 'Không nằm trong vòng hiện tại nào',
      blockCircle: 'Vòng chặn/vị trí loại trừ',
      adCircleZone: 'Vòng chạy quảng cáo · vùng hiện tại',
      radius: 'Bán kính',
      distCenter: 'Cách tâm',
      blockTooltip: 'Vòng chặn · {name} ({anchor}, {radius})',
      circleTooltip: '#{id} · {name}{manual}<br>{location}',
      centerTooltip: 'Tâm: {name}',
      manual: ' (chỉnh tay)',
      reassignCurrent: 'Vòng #{id} (hiện tại: {name})',
      reassignTo: 'Chuyển sang:',
      confirm: 'Xác nhận',
      clearAuto: 'Khôi phục tự động',
      rangeHint: '{blockCount} vòng chặn ({blockRadius}) + {outerCount} vòng ngoài ({outerRadius}) | tâm neo tổ ong={anchor} | phạm vi lấy từ {seedCount} tâm vòng 1mi cũ',
      subline: 'Vòng chặn: {blockCount} vị trí loại trừ màu đỏ, bán kính hiện tại {blockRadius}. Vòng ngoài bán kính {outerRadius}, xếp dạng tổ ong từ {anchor} (khoảng cách ngang √3×{outer}≈{spacing}km, khoảng cách hàng {rowSpacing}km), phủ phạm vi của {seedCount} vòng 1mi cũ.',
      detailAll: 'Chi_tiet_tat_ca',
      importAll: 'Nhap_tat_ca',
      sheetFallback: 'Vung',
      filePrefix: 'hanoi_ad_circles_block{blockRadius}_outer{outerRadius}_{stamp}',
      gridNames: ['Ha Noi-Tay Bac','Ha Noi-Bac','Ha Noi-Dong Bac','Ha Noi-Tay','Ha Noi-Trung tam','Ha Noi-Dong','Ha Noi-Tay Nam','Ha Noi-Nam','Ha Noi-Dong Nam'],
      ringNames: ['Ha Noi-Loi do thi','Ha Noi-Can do Dong Bac','Ha Noi-Can do Dong Nam','Ha Noi-Can do Tay Nam','Ha Noi-Can do Tay Bac','Ha Noi-Xa Dong Bac','Ha Noi-Xa Dong Nam','Ha Noi-Xa Tay Nam','Ha Noi-Xa Tay Bac'],
      multiNames: ['Thai Ha-Loi','Thai Ha-Can do','Thai Ha-Xa','Xa Dan-Loi','Xa Dan-Can do','Xa Dan-Xa','Ba Trieu-Loi','Ba Trieu-Can do','Ba Trieu-Xa']
    }
  };
  var savedLang = localStorage.getItem('hanoiCircleLang') || 'auto';
  var currentLang = resolveLang(savedLang);
  function resolveLang(value){
    if (value === 'zh' || value === 'vi') return value;
    var nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.indexOf('vi') === 0 ? 'vi' : 'zh';
  }
  function text(key){
    return (UI[currentLang] && UI[currentLang][key]) || UI.zh[key] || key;
  }
  function fmt(key, vars){
    return String(text(key)).replace(/\{(\w+)\}/g, function(_, k){ return vars && vars[k] !== undefined ? vars[k] : ''; });
  }
  function setText(id, value){
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  function setHtml(id, value){
    var el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }
  function listText(key){ return text(key).slice(); }
  if (typeof window.HANOI_SEEDS !== 'string') {
    alert(currentLang === 'vi' ? 'Thiếu file dữ liệu. Hãy đặt HTML cùng thư mục với các file JS dữ liệu rồi tải lại trang.' : '缺少数据文件：请把本 HTML 与「河内圈_种子数据.js」「河内圈_工具代码.js」放在同一文件夹后重新打开。');
    return;
  }
  // ---------- 半径参数 ----------
  var R_OUTER_INIT = (typeof window.R_CIRCLE === 'number' && window.R_CIRCLE > 0) ? window.R_CIRCLE : 3;
  var R_BLOCK_INIT = (typeof window.R_BLOCK === 'number' && window.R_BLOCK > 0) ? window.R_BLOCK : 3;
  var SYNC_RADII = window.HANOI_SYNC_RADII === true;
  var R_OUTER = R_OUTER_INIT;   // 外围投放圈半径 km
  var R_BLOCK = R_BLOCK_INIT;   // 屏蔽圈半径 km
  if (SYNC_RADII) {
    R_OUTER_INIT = R_BLOCK_INIT;
    R_OUTER = R_BLOCK;
  }
  var RADIUS_OPTIONS = [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];
  function rlabel(r){ return (r % 1 === 0 ? String(Math.round(r)) : String(r)) + 'km'; }

  // ---------- 锚点：蜂窝由此起铺；屏蔽圈可单独配置 ----------
  var DEFAULT_ANCHOR = { name: '193 Bà Triệu', lat: 21.0115, lng: 105.8496 };
  function normalizeAnchor(src){
    if (!src || typeof src !== 'object') return DEFAULT_ANCHOR;
    var lat = parseFloat(src.lat);
    var lng = parseFloat(src.lng);
    if (!isFinite(lat) || !isFinite(lng)) return DEFAULT_ANCHOR;
    return {
      name: src.name || src.nameZh || DEFAULT_ANCHOR.name,
      nameZh: src.nameZh || src.name || DEFAULT_ANCHOR.name,
      nameVi: src.nameVi || src.name || src.nameZh || DEFAULT_ANCHOR.name,
      label: src.label || null,
      labelZh: src.labelZh || null,
      labelVi: src.labelVi || null,
      lat: lat,
      lng: lng
    };
  }
  var ANCHOR = normalizeAnchor(window.HANOI_ANCHOR);
  function localizedConfig(baseName){
    var zh = window[baseName + '_ZH'];
    var vi = window[baseName + '_VI'];
    var plain = window[baseName];
    return currentLang === 'vi' ? (vi || plain || zh || '') : (zh || plain || vi || '');
  }
  function anchorName(){
    return currentLang === 'vi' ? (ANCHOR.nameVi || ANCHOR.name) : (ANCHOR.nameZh || ANCHOR.name);
  }
  function anchorLabel(){
    var label = currentLang === 'vi' ? (ANCHOR.labelVi || ANCHOR.label) : (ANCHOR.labelZh || ANCHOR.label);
    return label || anchorName();
  }
  function anchorVars(){
    return {
      anchor: anchorName(),
      anchorLabel: anchorLabel(),
      anchorLat: ANCHOR.lat.toFixed(6),
      anchorLng: ANCHOR.lng.toFixed(6)
    };
  }
  function withAnchor(vars){
    var out = anchorVars();
    vars = vars || {};
    Object.keys(vars).forEach(function(k){ out[k] = vars[k]; });
    return out;
  }
  function appTitleText(){ return localizedConfig('HANOI_PAGE_TITLE') || fmt('appTitle', anchorVars()); }
  function blockDefaultText(){
    return localizedConfig('HANOI_BLOCK_GROUP_NAME') || fmt('blockDefaultName', anchorVars());
  }
  function normalizeBlockConfig(src, idx){
    if (!src || typeof src !== 'object') return null;
    var lat = parseFloat(src.lat);
    var lng = parseFloat(src.lng);
    if (!isFinite(lat) || !isFinite(lng)) return null;
    var fallback = anchorName() + '-' + (idx + 1);
    return {
      name: src.name || src.nameZh || fallback,
      nameZh: src.nameZh || src.name || fallback,
      nameVi: src.nameVi || src.name || src.nameZh || fallback,
      lat: lat,
      lng: lng
    };
  }
  function normalizeBlockHex(src, idx){
    if (!src || typeof src !== 'object') return null;
    var i = parseInt(src.i, 10);
    var j = parseInt(src.j, 10);
    if (!isFinite(i) || !isFinite(j)) return null;
    var fallback = anchorName() + '-' + (idx + 1);
    return {
      i: i,
      j: j,
      name: src.name || src.nameZh || fallback,
      nameZh: src.nameZh || src.name || fallback,
      nameVi: src.nameVi || src.name || src.nameZh || fallback
    };
  }
  var BLOCK_HEXES = Array.isArray(window.HANOI_BLOCK_HEXES)
    ? window.HANOI_BLOCK_HEXES.map(normalizeBlockHex).filter(Boolean)
    : [];
  var BLOCK_CONFIGS = Array.isArray(window.HANOI_BLOCK_CIRCLES)
    ? window.HANOI_BLOCK_CIRCLES.map(normalizeBlockConfig).filter(Boolean)
    : [];
  if (!BLOCK_HEXES.length && !BLOCK_CONFIGS.length) {
    BLOCK_CONFIGS = [normalizeBlockConfig({ name: anchorName(), nameZh: ANCHOR.nameZh, nameVi: ANCHOR.nameVi, lat: ANCHOR.lat, lng: ANCHOR.lng }, 0)];
  }

  var KM_LAT = 110.86;
  var KM_LNG = 111.32 * Math.cos(21 * Math.PI / 180);

  document.title = appTitleText();
  var h1t = document.getElementById('h1t');
  if (h1t) h1t.textContent = appTitleText();

  function updateSubline(){
    var sub = document.getElementById('subline');
    if (sub) sub.textContent = fmt('subline', withAnchor({
      blockCount: blockPts.length || BLOCK_HEXES.length || BLOCK_CONFIGS.length,
      blockRadius: rlabel(R_BLOCK),
      outerRadius: rlabel(R_OUTER),
      outer: R_OUTER,
      spacing: (Math.sqrt(3) * R_OUTER).toFixed(2),
      rowSpacing: (1.5 * R_OUTER).toFixed(2),
      seedCount: seeds.length
    }));
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
      '<div class="row"><label id="blockSelLabel" style="width:110px"></label><select id="blockSel">' + optionsHtml(R_BLOCK) + '</select></div>' +
      '<div class="row"><label id="outerSelLabel" style="width:110px"></label><select id="outerSel">' + optionsHtml(R_OUTER) + '</select></div>' +
      '<div class="hint" id="radiusHint"></div>';
    modeCard.parentNode.insertBefore(card, modeCard);
  })();

  // ---------- 生成蜂窝布局（锚点确定，屏蔽圈可为一个或多个） ----------
  var pts = [];
  var blockPts = [];
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
  function hexLngOffset(i){
    return (((i % 2) + 2) % 2 === 1) ? 0.5 : 0;
  }
  function makeBlockPoint(src, idx, dLat, dLng){
    var lat = src.lat;
    var lng = src.lng;
    if (src.i !== undefined && src.j !== undefined) {
      lat = ANCHOR.lat + src.i * dLat;
      lng = ANCHOR.lng + (src.j + hexLngOffset(src.i)) * dLng;
    }
    return {
      id: idx + 1,
      lat: lat,
      lng: lng,
      r: R_BLOCK,
      blocked: true,
      name: src.name,
      nameZh: src.nameZh,
      nameVi: src.nameVi
    };
  }
  function buildBlockPts(dLat, dLng){
    var source = BLOCK_HEXES.length ? BLOCK_HEXES : BLOCK_CONFIGS;
    return source.map(function(b, idx){ return makeBlockPoint(b, idx, dLat, dLng); });
  }
  function fullyCoveredByBlock(la, lo){
    for (var b = 0; b < blockPts.length; b++) {
      if (distKmRaw(la, lo, blockPts[b].lat, blockPts[b].lng) + R_OUTER <= R_BLOCK + 1e-3) return true;
    }
    return false;
  }
  function generate(){
    var dLat = 1.5 * R_OUTER / KM_LAT;
    var dLng = Math.sqrt(3) * R_OUTER / KM_LNG;
    blockPts = buildBlockPts(dLat, dLng);
    var iMin = Math.floor((sLatMin - dLat - ANCHOR.lat) / dLat);
    var iMax = Math.ceil((sLatMax + dLat - ANCHOR.lat) / dLat);
    var jMin = Math.floor((sLngMin - dLng - ANCHOR.lng) / dLng);
    var jMax = Math.ceil((sLngMax + dLng - ANCHOR.lng) / dLng);
    var out = [];
    for (var i = iMin; i <= iMax; i++) {
      var la = ANCHOR.lat + i * dLat;
      var odd = ((i % 2) + 2) % 2 === 1;
      var off = odd ? 0.5 : 0;
      for (var j = jMin; j <= jMax; j++) {
        var lo = ANCHOR.lng + (j + off) * dLng;
        if (i === 0 && j === 0) continue;
        if (!nearSeed(la, lo)) continue;
        var dC = distKmRaw(la, lo, ANCHOR.lat, ANCHOR.lng);
        if (fullyCoveredByBlock(la, lo)) continue;
        out.push({ lat: la, lng: lo, dC: dC });
      }
    }
    out.sort(function(a, b){ return a.dC - b.dC; });
    pts = out.map(function(o, idx){
      return { id: idx + blockPts.length + 1, lat: +o.lat.toFixed(6), lng: +o.lng.toFixed(6), r: R_OUTER, override: null, extraBlock: false };
    });
    lats = pts.map(function(p){ return p.lat; });
    lngs = pts.map(function(p){ return p.lng; });
    latMin = Math.min.apply(null, lats); latMax = Math.max.apply(null, lats);
    lngMin = Math.min.apply(null, lngs); lngMax = Math.max.apply(null, lngs);
    document.getElementById('total').textContent = (pts.length + blockPts.length);
    document.getElementById('rangehint').textContent = fmt('rangeHint', withAnchor({
      blockCount: blockPts.length,
      blockRadius: rlabel(R_BLOCK),
      outerCount: pts.length,
      outerRadius: rlabel(R_OUTER),
      seedCount: seeds.length
    }));
    updateSubline();
  }

  // ---------- 配置 ----------
  var MULTI_CENTERS = [
    { name: '11 Thái Hà', label: '11 Thái Hà（Đống Đa）', lat: 21.0107, lng: 105.8223 },
    { name: '380 Xã Đàn', label: '380 Xã Đàn', lat: 21.0151, lng: 105.8335 },
    { name: '193 Bà Triệu', label: '193 Bà Triệu（Vincom）', lat: 21.0115, lng: 105.8496 }
  ];
  var CENTERS = MULTI_CENTERS.slice();
  function sameCenter(a, b){
    return Math.abs(a.lat - b.lat) < 0.000001 && Math.abs(a.lng - b.lng) < 0.000001;
  }
  var DEFAULT_CENTER_IDX = 2;
  if (window.HANOI_DEFAULT_RING_CENTER === 'anchor') {
    DEFAULT_CENTER_IDX = CENTERS.findIndex(function(c){ return sameCenter(c, ANCHOR); });
    if (DEFAULT_CENTER_IDX < 0) {
      CENTERS.push({
        name: anchorName(),
        label: anchorLabel(),
        anchor: true,
        lat: ANCHOR.lat,
        lng: ANCHOR.lng
      });
      DEFAULT_CENTER_IDX = CENTERS.length - 1;
    }
  } else if (typeof window.HANOI_DEFAULT_CENTER_IDX === 'number' && CENTERS[window.HANOI_DEFAULT_CENTER_IDX]) {
    DEFAULT_CENTER_IDX = window.HANOI_DEFAULT_CENTER_IDX;
  }
  function populateCenterSelect(){
    var sel = document.getElementById('centerSel');
    if (!sel) return;
    sel.innerHTML = CENTERS.map(function(c, idx){
      var label = c.anchor ? anchorLabel() : (c.label || c.name);
      return '<option value="' + idx + '">' + label + '</option>';
    }).join('');
    sel.value = String(centerIdx);
  }
  var DEFAULT_MODE = 'ring';
  var DEFAULT_R = { r1: 3, r2: 20 };
  var centerIdx = DEFAULT_CENTER_IDX;
  var COLORS = ['#e6194B','#3cb44b','#4363d8','#f58231','#911eb4','#00a5cf','#f032e6','#7f8c00','#9A6324'];
  var BLOCK_COLOR = '#c5221f';

  var G = { hlat1: 0, hlat2: 0, vlng1: 0, vlng2: 0 };
  var R = { r1: DEFAULT_R.r1, r2: DEFAULT_R.r2 };
  var mode = DEFAULT_MODE;
  var campaign = {};

  function defNames(){ return mode === 'grid' ? listText('gridNames') : (mode === 'ring' ? listText('ringNames') : listText('multiNames')); }
  function curName(zi){
    var k = mode + '_' + zi;
    return (campaign[k] !== undefined && campaign[k] !== '') ? campaign[k] : defNames()[zi];
  }
  function blockName(){
    return (campaign.block !== undefined && campaign.block !== '') ? campaign.block : blockDefaultText();
  }
  function blockPointName(p){
    return currentLang === 'vi' ? (p.nameVi || p.name) : (p.nameZh || p.name);
  }
  function extraBlockName(){
    return (campaign.extraBlock !== undefined && campaign.extraBlock !== '') ? campaign.extraBlock : text('extraBlockDefaultName');
  }
  function colorFor(zi){ return COLORS[zi % COLORS.length]; }
  function centerDisplayName(C){ return C.anchor ? anchorName() : C.name; }

  function updateStaticText(){
    document.documentElement.lang = currentLang === 'vi' ? 'vi' : 'zh-CN';
    populateCenterSelect();
    document.title = appTitleText();
    setText('h1t', appTitleText());
    setText('langLabel', text('langLabel'));
    setText('modeLabel', text('modeLabel'));
    setText('modeOptGrid', text('modeGrid'));
    setText('modeOptRing', text('modeRing'));
    setText('modeOptMulti', text('modeMulti'));
    setText('hlat1Label', text('hlat1Label'));
    setText('hlat2Label', text('hlat2Label'));
    setText('vlng1Label', text('vlng1Label'));
    setText('vlng2Label', text('vlng2Label'));
    setText('balance', text('balance'));
    setText('centerLabel', text('centerLabel'));
    setText('r1Label', text('r1Label'));
    setText('r2Label', text('r2Label'));
    setHtml('ringHint', text('ringHint'));
    setText('zonesTitle', text('zonesTitle'));
    setHtml('zonesHint', fmt('zonesHint', anchorVars()));
    setText('coordTitle', text('coordTitle'));
    setText('coordSearch', text('coordSearch'));
    setText('coordClear', text('coordClear'));
    setHtml('coordHint', text('coordHint'));
    setText('exportXlsx', text('exportXlsx'));
    setText('exportCsv', text('exportCsv'));
    setHtml('exportHint', text('exportHint'));
    setText('footerHint', text('footerHint'));
    setText('reset', text('reset'));
    setText('blockSelLabel', fmt('blockRadiusLabel', anchorVars()));
    setText('outerSelLabel', text('outerRadiusLabel'));
    setText('radiusHint', fmt('radiusHint', anchorVars()));
    var langSel = document.getElementById('langSel');
    if (langSel) {
      langSel.value = savedLang;
      var opts = langSel.options;
      if (opts[0]) opts[0].textContent = text('langAuto');
      if (opts[1]) opts[1].textContent = text('langZh');
      if (opts[2]) opts[2].textContent = text('langVi');
    }
    var coordInput = document.getElementById('coordInput');
    if (coordInput) coordInput.placeholder = text('coordPlaceholder');
    var result = document.getElementById('coordResult');
    if (result && !lastCoordQuery) result.textContent = text('coordDefault');
    var stat = document.getElementById('statLine');
    if (stat) {
      var total = document.getElementById('total');
      var assigned = document.getElementById('assigned');
      var totalValue = total ? total.textContent : '0';
      var assignedValue = assigned ? assigned.textContent : '0';
      var check = document.getElementById('checkmark');
      var checkValue = check ? check.innerHTML : '';
      stat.innerHTML = text('totalLabel') + ' <b id="total">' + totalValue + '</b> ｜ ' + text('assignedLabel') + ' <b id="assigned">' + assignedValue + '</b> <span id="checkmark">' + checkValue + '</span>';
    }
    var showSeeds = document.getElementById('showSeedsHint');
    if (showSeeds) showSeeds.firstChild.nodeValue = text('showSeedsPrefix');
    setText('showSeedsLabel', text('showSeedsLabel'));
    updateSubline();
    if (pts.length) {
      document.getElementById('rangehint').textContent = fmt('rangeHint', withAnchor({
        blockCount: blockPts.length,
        blockRadius: rlabel(R_BLOCK),
        outerCount: pts.length,
        outerRadius: rlabel(R_OUTER),
        seedCount: seeds.length
      }));
    }
  }

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
    for (var ci = 0; ci < MULTI_CENTERS.length; ci++) {
      var d = distKm(lat, lng, MULTI_CENTERS[ci]);
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
      L.circleMarker([C.lat, C.lng], { radius:5, color:'#c5221f', fillColor:'#c5221f', fillOpacity:1 }).bindTooltip(fmt('centerTooltip', { name: centerDisplayName(C) })).addTo(lineLayer);
    } else {
      MULTI_CENTERS.forEach(function(C){
        L.circle([C.lat, C.lng], { radius: R.r1 * 1000, color:'#222', weight:1.5, fill:false, dashArray:'6,5' }).addTo(lineLayer);
        L.circle([C.lat, C.lng], { radius: R.r2 * 1000, color:'#222', weight:1.5, fill:false, dashArray:'6,5' }).addTo(lineLayer);
        L.circleMarker([C.lat, C.lng], { radius:5, color:'#c5221f', fillColor:'#c5221f', fillOpacity:1 }).bindTooltip(fmt('centerTooltip', { name: centerDisplayName(C) })).addTo(lineLayer);
      });
    }
  }

  function render(){
    circleLayer.clearLayers();
    var counts = [0,0,0,0,0,0,0,0,0];
    var extraCount = 0;
    for (var i = 0; i < pts.length; i++) {
      (function(p){
        var zi = assignZone(p);
        var name = p.extraBlock ? extraBlockName() : curName(zi);
        if (p.extraBlock) extraCount++; else counts[zi]++;
        var col = p.extraBlock ? BLOCK_COLOR : colorFor(zi);
        var c = L.circle([p.lat, p.lng], {
          radius: p.r * 1000,
          color: col,
          weight: p.extraBlock ? 2.5 : 1,
          fillColor: col,
          fillOpacity: p.extraBlock ? 0.42 : 0.3,
          dashArray: p.extraBlock ? '5,4' : null
        });
        c.bindTooltip(fmt('circleTooltip', {
          id: p.id,
          name: name,
          manual: p.extraBlock ? '' : (p.override !== null ? text('manual') : ''),
          location: locStr(p)
        }), { sticky: true });
        c.on('click', function(){ openReassign(p); });
        circleLayer.addLayer(c);
      })(pts[i]);
    }
    blockPts.forEach(function(bp){
      var bc = L.circle([bp.lat, bp.lng], { radius: bp.r * 1000, color: BLOCK_COLOR, weight: 2.5, fillColor: BLOCK_COLOR, fillOpacity: 0.22, dashArray: '4,4' });
      bc.bindTooltip(fmt('blockTooltip', withAnchor({ name: blockName(), anchor: blockPointName(bp), radius: rlabel(bp.r) })), { sticky: true });
      circleLayer.addLayer(bc);
      circleLayer.addLayer(L.circleMarker([bp.lat, bp.lng], { radius: 4, color: BLOCK_COLOR, fillColor: BLOCK_COLOR, fillOpacity: 1 }));
    });
    var assigned = counts.reduce(function(a,b){ return a + b; }, 0) + extraCount + blockPts.length;
    document.getElementById('assigned').textContent = assigned;
    document.getElementById('checkmark').innerHTML = (assigned === pts.length + blockPts.length)
      ? '<span class="ok">' + text('allAssigned') + '</span>' : '<span class="warn">' + text('countMismatch') + '</span>';
    drawLines();
    renderZones(counts, extraCount);
    refreshCoordSearch();
  }

  function renderZones(counts, extraCount){
    var box = document.getElementById('zones');
    box.innerHTML = '';
    var bdiv = document.createElement('div'); bdiv.className = 'zone';
    var bsw = document.createElement('span'); bsw.className = 'sw'; bsw.style.background = BLOCK_COLOR; bdiv.appendChild(bsw);
    var binp = document.createElement('input'); binp.type = 'text'; binp.value = blockName();
    binp.addEventListener('input', function(){ campaign.block = binp.value; });
    bdiv.appendChild(binp);
    var bcnt = document.createElement('span'); bcnt.className = 'cnt'; bcnt.textContent = blockPts.length; bdiv.appendChild(bcnt);
    var bcp = document.createElement('button'); bcp.className = 'mini'; bcp.textContent = text('copy');
    bcp.addEventListener('click', function(){ copyBlock(); });
    bdiv.appendChild(bcp);
    box.appendChild(bdiv);

    var ediv = document.createElement('div'); ediv.className = 'zone';
    var esw = document.createElement('span'); esw.className = 'sw'; esw.style.background = BLOCK_COLOR; ediv.appendChild(esw);
    var einp = document.createElement('input'); einp.type = 'text'; einp.value = extraBlockName();
    einp.addEventListener('input', function(){ campaign.extraBlock = einp.value; });
    ediv.appendChild(einp);
    var ecnt = document.createElement('span'); ecnt.className = 'cnt'; ecnt.textContent = extraCount || 0; ediv.appendChild(ecnt);
    var ecp = document.createElement('button'); ecp.className = 'mini'; ecp.textContent = text('copy');
    ecp.addEventListener('click', copyExtraBlock);
    ediv.appendChild(ecp);
    box.appendChild(ediv);

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
        var cp = document.createElement('button'); cp.className = 'mini'; cp.textContent = text('copy');
        cp.addEventListener('click', function(){ copyZone(z); });
        div.appendChild(cp);
        box.appendChild(div);
      })(zi);
    }
  }

  function openReassign(p){
    var zi = assignZone(p);
    var currentName = p.extraBlock ? extraBlockName() : curName(zi);
    var html = '<div style="font-size:12px">' +
      fmt('reassignCurrent', { id: p.id, name: currentName }) +
      '<br>' + text('locationLabel') + '：<code>' + locStr(p) + '</code>' +
      '<br><button id="copyLocBtn" class="mini" style="margin-top:6px">' + text('copyLocation') + '</button> ' +
      '<button id="extraBlockBtn" class="mini" style="margin-top:6px">' + (p.extraBlock ? text('removeExtraBlock') : text('addExtraBlock')) + '</button>' +
      '<br>' + text('reassignTo') + ' <select id="reSel" style="margin-top:4px">';
    for (var z = 0; z < 9; z++) html += '<option value="' + z + '"' + (z === zi ? ' selected' : '') + '>' + curName(z) + '</option>';
    html += '</select><br><button id="reBtn" class="mini" style="margin-top:6px">' + text('confirm') + '</button> <button id="reClr" class="mini" style="margin-top:6px">' + text('clearAuto') + '</button></div>';
    var pop = L.popup().setLatLng([p.lat, p.lng]).setContent(html).openOn(map);
    setTimeout(function(){
      var b = document.getElementById('reBtn');
      var cl = document.getElementById('reClr');
      var cp = document.getElementById('copyLocBtn');
      var ex = document.getElementById('extraBlockBtn');
      if (cp) cp.onclick = function(){ copyLocation(p); };
      if (ex) ex.onclick = function(){ p.extraBlock = !p.extraBlock; map.closePopup(); render(); };
      if (b) b.onclick = function(){ p.extraBlock = false; p.override = parseInt(document.getElementById('reSel').value, 10); map.closePopup(); render(); };
      if (cl) cl.onclick = function(){ p.extraBlock = false; p.override = null; map.closePopup(); render(); };
    }, 30);
  }

  // ---------- 导出 ----------
  function locStr(p){ return '(' + rlabel(p.r) + ':' + p.lat.toFixed(6) + ':' + p.lng.toFixed(6) + ')'; }
  function buildRows(){
    var rows = blockPts.map(function(bp){
      return { ID: bp.id, Zone: blockName(), Campaign: blockName(), Location: locStr(bp), Latitude: bp.lat, Longitude: bp.lng };
    });
    pts.forEach(function(p){
      var zi = assignZone(p);
      var name = p.extraBlock ? extraBlockName() : curName(zi);
      rows.push({ ID: p.id, Zone: name, Campaign: name, Location: locStr(p), Latitude: p.lat, Longitude: p.lng });
    });
    return rows;
  }
  function sanitizeSheet(name, used){
    var s = String(name || text('sheetFallback')).replace(/[\[\]\:\*\?\/\\]/g, ' ').trim().slice(0, 28) || text('sheetFallback');
    var base = s, k = 1;
    while (used[s]) s = base + '_' + (k++);
    used[s] = true; return s;
  }
  function exportXlsx(){
    if (typeof XLSX === 'undefined') { alert(text('xlsxMissing')); return; }
    var rows = buildRows();
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(rows, { header: ['ID','Zone','Campaign','Location','Latitude','Longitude'] });
    XLSX.utils.book_append_sheet(wb, ws, text('detailAll'));
    var imp = rows.map(function(r){ return { Campaign: r.Campaign, Location: r.Location }; });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(imp, { header: ['Campaign','Location'] }), text('importAll'));
    var groups = {};
    rows.forEach(function(r){ (groups[r.Campaign] = groups[r.Campaign] || []).push(r); });
    var used = {};
    used[text('detailAll')] = true;
    used[text('importAll')] = true;
    Object.keys(groups).forEach(function(g){
      var gr = groups[g].map(function(r){ return { Campaign: r.Campaign, Location: r.Location }; });
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(gr, { header: ['Campaign','Location'] }), sanitizeSheet(g, used));
    });
    XLSX.writeFile(wb, fmt('filePrefix', { blockRadius: rlabel(R_BLOCK), outerRadius: rlabel(R_OUTER), stamp: stamp() }) + '.xlsx');
  }
  function exportCsv(){
    var rows = buildRows();
    var head = ['ID','Zone','Campaign','Location','Latitude','Longitude'];
    var lines = [head.join(',')];
    rows.forEach(function(r){
      lines.push([r.ID, q(r.Zone), q(r.Campaign), q(r.Location), r.Latitude, r.Longitude].join(','));
    });
    dl(new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' }), fmt('filePrefix', { blockRadius: rlabel(R_BLOCK), outerRadius: rlabel(R_OUTER), stamp: stamp() }) + '.csv');
  }
  function copyBlock(){
    var name = blockName();
    var tsv = 'Campaign\tLocation\n' + blockPts.map(function(bp){ return name + '\t' + locStr(bp); }).join('\n');
    doCopy(tsv, name, blockPts.length);
  }
  function copyExtraBlock(){
    var name = extraBlockName();
    var rows = pts.filter(function(p){ return p.extraBlock; });
    if (!rows.length) { flash(text('emptyExtraBlock')); return; }
    var tsv = 'Campaign\tLocation\n' + rows.map(function(p){ return name + '\t' + locStr(p); }).join('\n');
    doCopy(tsv, name, rows.length);
  }
  function copyZone(zi){
    var name = curName(zi);
    var rows = pts.filter(function(p){ return !p.extraBlock && assignZone(p) === zi; });
    if (!rows.length) { flash(text('emptyZone')); return; }
    var tsv = 'Campaign\tLocation\n' + rows.map(function(p){ return name + '\t' + locStr(p); }).join('\n');
    doCopy(tsv, name, rows.length);
  }
  function copyLocation(p){
    var location = locStr(p);
    copyText(location, fmt('copiedLocation', { location: location }));
  }
  function doCopy(tsv, name, n){
    copyText(tsv, fmt('copiedCampaignRows', { name: name, n: n }), function(){ fallbackCopy(tsv, name, n); });
  }
  function copyText(value, successMsg, failFn){
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(
        function(){ flash(successMsg); },
        function(){ if (failFn) failFn(); else fallbackTextCopy(value, successMsg); }
      );
    } else if (failFn) { failFn(); }
    else { fallbackTextCopy(value, successMsg); }
  }
  function fallbackTextCopy(textValue, successMsg){
    var ta = document.createElement('textarea');
    ta.value = textValue; ta.style.cssText = 'position:fixed;left:-9999px;';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); flash(successMsg); }
    catch(e){ alert(text('copyFailed')); }
    ta.remove();
  }
  function fallbackCopy(textValue, name, n){
    var ta = document.createElement('textarea');
    ta.value = textValue; ta.style.cssText = 'position:fixed;left:-9999px;';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); flash(fmt('copiedRows', { name: name, n: n })); }
    catch(e){ alert(text('copyFailed')); }
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
  function hanoiScore(p){
    var midLat = 20.98, midLng = 105.8;
    return Math.abs(p.lat - midLat) * 2 + Math.abs(p.lng - midLng);
  }
  function asLatLng(a, b){
    if (isLat(a) && isLng(b)) return { lat: a, lng: b };
    if (isLat(b) && isLng(a)) return { lat: b, lng: a, swapped: true };
    return null;
  }
  function parseCoordInput(text){
    var source = String(text || '').trim();
    var lower = source.toLowerCase();
    var nums = (source.match(/-?\d+(?:\.\d+)?/g) || []).map(function(n){ return parseFloat(n); });
    if (nums.length < 2) return null;
    var pairs = [], labeled;
    labeled = lower.match(/(?:lat|latitude|vĩ\s*độ|vi\s*do|纬度)\D*(-?\d+(?:\.\d+)?)[\s\S]{0,80}?(?:lng|lon|long|longitude|kinh\s*độ|kinh\s*do|经度)\D*(-?\d+(?:\.\d+)?)/i);
    if (labeled) pairs.push([parseFloat(labeled[1]), parseFloat(labeled[2])]);
    labeled = lower.match(/(?:lng|lon|long|longitude|kinh\s*độ|kinh\s*do|经度)\D*(-?\d+(?:\.\d+)?)[\s\S]{0,80}?(?:lat|latitude|vĩ\s*độ|vi\s*do|纬度)\D*(-?\d+(?:\.\d+)?)/i);
    if (labeled) pairs.push([parseFloat(labeled[1]), parseFloat(labeled[2])]);
    if (nums.length >= 3) {
      if (Math.abs(nums[0]) <= 10) pairs.push([nums[1], nums[2]]);
      pairs.push([nums[nums.length - 2], nums[nums.length - 1]]);
      pairs.push([nums[1], nums[2]]);
    }
    pairs.push([nums[0], nums[1]]);
    for (var n = 0; n < nums.length - 1; n++) pairs.push([nums[n], nums[n + 1]]);
    var best = null;
    for (var i = 0; i < pairs.length; i++) {
      var p = asLatLng(pairs[i][0], pairs[i][1]);
      if (!p) continue;
      var score = hanoiScore(p);
      if (!best || score < best.score) best = { point: p, score: score };
    }
    return best ? best.point : null;
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
          isExtraBlock: !!p.extraBlock,
          zone: zi,
          name: isBlock ? blockName() : (p.extraBlock ? extraBlockName() : curName(zi)),
          color: (isBlock || p.extraBlock) ? BLOCK_COLOR : colorFor(zi),
          dist: d
        });
      }
    }
    blockPts.forEach(function(bp){ addHit(bp, true); });
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
          isExtraBlock: !!p.extraBlock,
          zone: zi,
          name: isBlock ? blockName() : (p.extraBlock ? extraBlockName() : curName(zi)),
          color: (isBlock || p.extraBlock) ? BLOCK_COLOR : colorFor(zi),
          dist: d,
          edge: edge
        };
      }
    }
    blockPts.forEach(function(bp){ test(bp, true); });
    pts.forEach(function(p){ test(p, false); });
    return best;
  }
  function formatKm(v){ return Number(v).toFixed(2) + 'km'; }
  function renderCoordResult(lat, lng, hits, nearest){
    var box = document.getElementById('coordResult');
    if (!box) return;
    box.innerHTML = '';
    var head = document.createElement('div');
    head.textContent = fmt('coordSearched', { lat: lat.toFixed(6), lng: lng.toFixed(6) });
    box.appendChild(head);
    if (!hits.length) {
      var miss = document.createElement('div');
      miss.className = 'warn';
      miss.textContent = text('coordMiss');
      box.appendChild(miss);
      if (nearest) {
        var near = document.createElement('div');
        near.className = 'coord-hit';
        near.style.borderColor = nearest.color;
        near.textContent = fmt('coordNearest', { id: nearest.point.id, name: nearest.name, dist: formatKm(nearest.dist), edge: formatKm(nearest.edge) });
        box.appendChild(near);
      }
      return;
    }
    var summary = document.createElement('div');
    summary.className = 'ok';
    summary.textContent = fmt('coordHitSummary', { n: hits.length });
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
        (hit.isBlock ? text('blockCircle') : (hit.isExtraBlock ? text('extraBlockMeta') : text('adCircleZone'))) +
        '｜' + text('radius') + ' ' + rlabel(hit.point.r) +
        '｜' + text('distCenter') + ' ' + formatKm(hit.dist) +
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
      ? fmt('coordPopupHit', { n: hits.length, ids: hits.map(function(h){ return '#' + h.point.id; }).join(', ') })
      : text('coordPopupMiss');
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
      result.innerHTML = '<span class="warn">' + text('coordParseFailed') + '</span>';
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
    if (result) result.textContent = text('coordDefault');
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
  function syncModeControls(){
    document.getElementById('mode').value = mode;
    document.getElementById('centerSel').value = String(centerIdx);
    document.getElementById('gridctrl').style.display = mode === 'grid' ? 'block' : 'none';
    document.getElementById('ringctrl').style.display = mode === 'grid' ? 'none' : 'block';
    document.getElementById('centerRow').style.display = mode === 'ring' ? 'flex' : 'none';
  }

  // ---------- 事件 ----------
  function regenerateAll(){
    generate();
    balanceGrid();
    refreshGridSliderBounds();
    render();
  }
  function syncRadiusSelects(){
    document.getElementById('blockSel').value = String(R_BLOCK);
    document.getElementById('outerSel').value = String(R_OUTER);
  }
  document.getElementById('blockSel').addEventListener('change', function(e){
    R_BLOCK = parseFloat(e.target.value);
    if (SYNC_RADII) R_OUTER = R_BLOCK;
    syncRadiusSelects();
    regenerateAll();
  });
  document.getElementById('outerSel').addEventListener('change', function(e){
    R_OUTER = parseFloat(e.target.value);
    if (SYNC_RADII) R_BLOCK = R_OUTER;
    syncRadiusSelects();
    regenerateAll();
  });
  document.getElementById('mode').addEventListener('change', function(e){
    mode = e.target.value;
    pts.forEach(function(p){ p.override = null; });
    syncModeControls();
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
  document.getElementById('langSel').addEventListener('change', function(e){
    savedLang = e.target.value;
    localStorage.setItem('hanoiCircleLang', savedLang);
    currentLang = resolveLang(savedLang);
    updateStaticText();
    render();
  });
  document.getElementById('reset').addEventListener('click', function(){
    campaign = {};
    R = { r1: DEFAULT_R.r1, r2: DEFAULT_R.r2 };
    centerIdx = DEFAULT_CENTER_IDX;
    mode = DEFAULT_MODE;
    R_BLOCK = R_BLOCK_INIT; R_OUTER = R_OUTER_INIT;
    if (SYNC_RADII) R_OUTER = R_BLOCK;
    syncRadiusSelects();
    syncModeControls();
    syncRingSliders();
    regenerateAll();
  });

  // ---------- 启动 ----------
  updateStaticText();
  generate();
  balanceGrid();
  initGridSliders();
  initRingSliders();
  syncModeControls();
  map.fitBounds([[latMin, lngMin], [latMax, lngMax]], { padding: [20, 20] });
  render();
})();
