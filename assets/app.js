
const I18N = {
  en:{nav_home:"Home",nav_dividends:"Dividend Tracker",nav_growth:"Growth & Forecast",nav_market:"Marketplace",nav_admin:"Admin",
      demo_mode:"Demo data enabled",
      cta_browse:"Browse deals",cta_track:"Track dividends",
      mission_badge:"Own real estate, fractionally & transparently",
      hero_title:"Real estate investing for everyday investors",
      hero_sub:"DeFi‑RealEstate makes property investing simple: select vetted deals, invest from $500, and track dividends & growth with built‑in analytics.",
      kpi_secure:"Non‑custodial: you control allocations",kpi_tools:"Built‑in analytics & forecasting",kpi_bilingual:"English / Vietnamese",
      how_1_t:"Fractional shares",how_1_d:"Invest from $500. Build a diversified portfolio across markets and property types.",
      how_2_t:"Transparent returns",how_2_d:"Track dividends and equity growth with clear tables and simple charts.",
      how_3_t:"Owner & investor tools",how_3_d:"Owners can list offerings; investors can reserve allocations and propose amounts.",
      div_title:"Dividend Tracker",div_desc:"Log your payouts and forecast future income.",div_amount:"Amount ($)",div_date:"Date",
      add:"Add",export:"Export CSV",clear:"Clear",t_date:"Date",t_amount:"Amount",t_total:"Total",
      div_forecast_t:"Dividend Forecast",f_current:"Current principal ($)",f_yield:"Annual yield (%)",f_contrib:"Monthly contribution ($)",
      f_years:"Years",f_reinvest:"Reinvest dividends?",yes:"Yes",no:"No",run:"Run Forecast",t_year:"Year",t_income:"Income",t_balance:"Balance",
      g_title:"Property Growth & Equity Forecast",g_purchase:"Purchase price ($)",g_down:"Down payment (%)",
      g_rate:"Interest rate (%)",g_term:"Term (years)",g_app:"Appreciation/yr (%)",g_extra:"Extra principal/mo ($)",
      g_table:"Year‑by‑Year",t_value:"Value",t_principal:"Principal Paid",t_equity:"Equity",t_cagr:"CAGR",
      m_title:"Marketplace (Demo)",m_desc:"Browse mock listings, open the Invest modal, and propose an allocation (min $500).",
      m_search:"Search",m_type:"Type",m_beds:"Beds (min)",m_min:"Min Price",m_max:"Max Price",m_sort:"Sort",
      any:"Any",type_sf:"Single Family",type_con:"Condo",type_th:"Townhome",sort_new:"Newest",sort_pa:"Price ↑",sort_pd:"Price ↓",sort_cap:"Cap Rate ↓",
      invest:"Invest",available:"Available",raise:"Raise",
      a_title:"Admin — Add Property (Demo)",a_desc:"Add demo listings. They appear in the Marketplace and are stored locally for this session.",
      a_address:"Address",a_type:"Type",a_price:"Price ($)",a_cap:"Cap Rate (%)",a_beds:"Beds",a_baths:"Baths",a_sqft:"Sqft",a_raise:"Total Raise ($)",a_img:"Image URL",
      a_desc_label:"Description",a_current:"Current Offerings",t_address:"Address",t_price:"Price",t_raise:"Raise",t_available:"Available",
      inv_name:"Your name",inv_amount:"Amount ($) — min $500",cancel:"Cancel",
      foot_rights:"All rights reserved."},
  vi:{nav_home:"Trang chủ",nav_dividends:"Cổ tức",nav_growth:"Tăng trưởng & Dự báo",nav_market:"Thị trường",nav_admin:"Quản trị",
      demo_mode:"Chế độ dữ liệu demo",
      cta_browse:"Xem dự án",cta_track:"Theo dõi cổ tức",
      mission_badge:"Sở hữu BĐS theo phần trăm, minh bạch",
      hero_title:"Đầu tư bất động sản cho mọi nhà đầu tư",
      hero_sub:"DeFi‑RealEstate giúp đầu tư BĐS dễ dàng: chọn dự án đã thẩm định, đầu tư từ $500 và theo dõi cổ tức & tăng trưởng bằng công cụ tích hợp.",
      kpi_secure:"Tự quản phân bổ vốn",kpi_tools:"Phân tích & dự báo tích hợp",kpi_bilingual:"Tiếng Anh / Tiếng Việt",
      how_1_t:"Sở hữu theo phần",how_1_d:"Đầu tư từ $500. Đa dạng hóa danh mục theo khu vực & loại hình.",
      how_2_t:"Lợi nhuận minh bạch",how_2_d:"Theo dõi cổ tức & vốn chủ sở hữu bằng bảng và biểu đồ đơn giản.",
      how_3_t:"Công cụ cho chủ & NĐT",how_3_d:"Chủ sở hữu đăng dự án; nhà đầu tư giữ chỗ & đề xuất số tiền.",
      div_title:"Theo dõi cổ tức",div_desc:"Ghi nhận chi trả và dự báo thu nhập.",div_amount:"Số tiền ($)",div_date:"Ngày",
      add:"Thêm",export:"Xuất CSV",clear:"Xóa",t_date:"Ngày",t_amount:"Số tiền",t_total:"Tổng",
      div_forecast_t:"Dự báo cổ tức",f_current:"Vốn hiện tại ($)",f_yield:"Lợi suất năm (%)",f_contrib:"Góp hàng tháng ($)",
      f_years:"Số năm",f_reinvest:"Tái đầu tư cổ tức?",yes:"Có",no:"Không",run:"Chạy dự báo",t_year:"Năm",t_income:"Thu nhập",t_balance:"Số dư",
      g_title:"Dự báo Tăng trưởng & Vốn chủ",g_purchase:"Giá mua ($)",g_down:"Trả trước (%)",
      g_rate:"Lãi suất (%)",g_term:"Kỳ hạn (năm)",g_app:"Tăng giá/năm (%)",g_extra:"Trả gốc thêm/tháng ($)",
      g_table:"Theo từng năm",t_value:"Giá trị",t_principal:"Gốc đã trả",t_equity:"Vốn chủ",t_cagr:"CAGR",
      m_title:"Thị trường (Demo)",m_desc:"Duyệt danh sách mẫu, mở hộp đăng ký đầu tư và đề xuất khoản đầu tư (tối thiểu $500).",
      m_search:"Tìm kiếm",m_type:"Loại",m_beds:"Phòng ngủ (tối thiểu)",m_min:"Giá tối thiểu",m_max:"Giá tối đa",m_sort:"Sắp xếp",
      any:"Bất kỳ",type_sf:"Nhà riêng",type_con:"Căn hộ",type_th:"Nhà liền kề",sort_new:"Mới nhất",sort_pa:"Giá ↑",sort_pd:"Giá ↓",sort_cap:"Tỷ suất vốn hóa ↓",
      invest:"Đầu tư",available:"Còn mở",raise:"Kêu gọi",
      a_title:"Quản trị — Thêm dự án (Demo)",a_desc:"Thêm danh sách demo. Hiển thị ở Thị trường và lưu cục bộ trong phiên.",
      a_address:"Địa chỉ",a_type:"Loại",a_price:"Giá ($)",a_cap:"Tỷ suất vốn hóa (%)",a_beds:"Phòng ngủ",a_baths:"Phòng tắm",a_sqft:"Diện tích (sqft)",a_raise:"Số vốn kêu gọi ($)",a_img:"Ảnh URL",
      a_desc_label:"Mô tả",a_current:"Dự án hiện có",t_address:"Địa chỉ",t_price:"Giá",t_raise:"Kêu gọi",t_available:"Còn mở",
      inv_name:"Tên của bạn",inv_amount:"Số tiền ($) — tối thiểu $500",cancel:"Hủy",
      foot_rights:"Giữ mọi quyền."}
};

function applyI18n(lang){
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key]) el.textContent = dict[key];
  });
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
}

function initHeader(active){
  const saved = localStorage.getItem("lang") || "en";
  const langSel = document.getElementById("langSel");
  if (langSel) {
    langSel.value = saved;
    langSel.addEventListener("change", e=>applyI18n(e.target.value));
  }
  applyI18n(saved);
  document.querySelectorAll("nav a").forEach(a=>{
    if(a.dataset.page === active) a.classList.add("active");
  });
  const yr = document.getElementById("yr"); if(yr) yr.textContent = new Date().getFullYear();
}

function formatMoney(x){ return x?.toLocaleString(undefined,{style:"currency",currency:"USD"}) || "$0"; }

function drawLine(canvasId, series){
  const c = document.getElementById(canvasId); if(!c) return;
  const ctx = c.getContext("2d");
  const w = c.width = c.clientWidth, h = c.height;
  ctx.clearRect(0,0,w,h);
  const max = Math.max(...series, 10);
  const pad = 30, gx = (w-pad*2)/(series.length-1||1), gy = (h-pad*2)/max;
  ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad,h-pad); ctx.lineTo(w-pad,h-pad); ctx.lineTo(w-pad,pad); ctx.stroke();
  ctx.strokeStyle = "#2563eb"; ctx.lineWidth = 2; ctx.beginPath();
  series.forEach((v,i)=>{const x=pad+i*gx, y=h-pad-v*gy; if(i===0)ctx.moveTo(x,y); else ctx.lineTo(x,y);}); ctx.stroke();
  ctx.fillStyle = "#2563eb";
  series.forEach((v,i)=>{const x=pad+i*gx, y=h-pad-v*gy; ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();});
  ctx.fillStyle = "#475569"; ctx.font = "12px system-ui";
  ctx.fillText("0",5,h-pad+4); ctx.fillText(max.toLocaleString(),5,pad+6);
}

function getMockListings(){
  let listings = JSON.parse(localStorage.getItem("demo_listings")||"null");
  if(!listings){
    listings = [
      { id:"P-001", ts:Date.now()-1000*60*60*24*2,
        address:"123 Palm Avenue, Orlando, FL", type:"Single Family", price:420000, beds:3, baths:2, sqft:1850,
        capRate:5.6, totalRaise:120000, availableRaise:80000,
        image:"https://images.unsplash.com/photo-1600585154340-1e4ce9a4c24f?q=80&w=1200&auto=format&fit=crop",
        description:"Beautiful single-family home near Lake Eola with modern kitchen and spacious backyard.",
        sourceUrl:"#"
      },
      { id:"P-002", ts:Date.now()-1000*60*60*24*5,
        address:"88 Ocean Drive, Miami, FL", type:"Condo", price:1250000, beds:4, baths:3, sqft:2800,
        capRate:6.1, totalRaise:400000, availableRaise:400000,
        image:"https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
        description:"Luxury beachfront property with stunning ocean views and private pool.",
        sourceUrl:"#"
      },
      { id:"P-003", ts:Date.now()-1000*60*60*20,
        address:"456 Maple Street, Tampa, FL", type:"Single Family", price:350000, beds:3, baths:2, sqft:1600,
        capRate:5.2, totalRaise:100000, availableRaise:75000,
        image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
        description:"Charming home in a quiet neighborhood, perfect for families or rental income.",
        sourceUrl:"#"
      }
    ];
    localStorage.setItem("demo_listings", JSON.stringify(listings));
  }
  return listings;
}
function saveMockListings(list){ localStorage.setItem("demo_listings", JSON.stringify(list)); }

// Register Service Worker for offline cache (when served over HTTP)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
