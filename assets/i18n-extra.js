// Extend translations and enhance applyI18n to handle attributes
(function(){
  try{
    var add = {
      en:{
  // Placeholders and labels
        m_ph_search:"City, address...",
        inv_email_label:"Email",
        inv_phone_label:"Phone",
        cc_name_label:"Name on Card",
        cc_number_label:"Card Number",
        cc_exp_label:"Expiry (MM/YY)",
        cc_cvc_label:"CVC",
        cc_zip_label:"ZIP/Postal",
        demo_note:"Demo only — no real payment is processed.",
        available_short:"available",
        invest_title:"Invest",
  edit:"Edit",
  cancel_edit:"Cancel edit",
  save:"Save",
  t_actions:"Actions",
  // Marketplace/Admin common errors
        err_name_required:"Please enter your name.",
        err_min_amount:"Minimum is $500.",
        err_exceeds_available:"Exceeds available amount.",
        err_email:"Please enter a valid email.",
        err_phone:"Please enter a valid phone number.",
        err_cc_name:"Please enter name on card.",
        err_cc_number:"Card number looks invalid.",
        err_cc_exp:"Expiry must be MM/YY and not in the past.",
        err_cc_cvc:"CVC must be 3–4 digits.",
        err_cc_zip:"Please enter a valid ZIP/Postal code.",
        success_reserved:"Allocation reserved!",
  // Admin validation errors
  a_err_address_required:"Please enter an address.",
  a_err_type_required:"Please select a type.",
  a_err_price_gt0:"Price must be greater than 0.",
  a_err_cap_required:"Cap Rate is required.",
  a_err_cap_range:"Cap Rate must be between 0 and 100.",
  a_err_beds_required:"Beds is required.",
  a_err_beds_nonneg:"Beds cannot be negative.",
  a_err_baths_required:"Baths is required.",
  a_err_baths_nonneg:"Baths cannot be negative.",
  a_err_sqft_required:"Sqft is required.",
  a_err_sqft_nonneg:"Sqft cannot be negative.",
  a_err_raise_required:"Total Raise is required.",
  a_err_raise_gt0:"Total Raise must be greater than 0.",
  a_err_img_required:"Image URL is required.",
  a_err_img_format:"Image URL must start with http(s) or be a data URL.",
  a_err_desc_required:"Description is required.",
        div_err_amt_gt0:"Amount must be greater than 0.",
        div_confirm_clear:"Clear all dividends?",
        csv_date:"Date",
        csv_amount:"Amount",
        g_err_price:"Purchase price must be greater than 0.",
        g_err_down:"Down payment must be between 0 and 100.",
        g_err_rate:"Interest rate cannot be negative.",
        g_err_term:"Term must be greater than 0 years.",
        g_err_app:"Appreciation cannot be less than -100%.",
        g_err_extra:"Extra principal cannot be negative.",
        a_clear_form:"Clear Form",
        trash_title:"Trash (Deleted)",
        trash_restore_all:"Restore All",
        trash_empty:"Empty Trash",
        trash_restore:"Restore",
        remove:"Remove",
        listing_removed:"Listing removed.",
        undo:"Undo",
  trash_empty_confirm:"Empty trash permanently?",
  // Confirm templates
  a_confirm_remove:"Remove this listing?\n{addr}",
  // SW update toast
  sw_update_available:"New version available",
  sw_refresh:"Refresh",
  sw_dismiss:"Dismiss"
      },
      vi:{
  // Placeholders and labels
        m_ph_search:"Thành phố, địa chỉ...",
        inv_email_label:"Email",
        inv_phone_label:"Điện thoại",
        cc_name_label:"Tên trên thẻ",
        cc_number_label:"Số thẻ",
        cc_exp_label:"Hết hạn (MM/YY)",
        cc_cvc_label:"CVC",
        cc_zip_label:"Mã bưu chính",
        demo_note:"Chỉ demo — không xử lý thanh toán.",
        available_short:"còn mở",
        invest_title:"Đầu tư",
  edit:"Sửa",
  cancel_edit:"Hủy chỉnh sửa",
  save:"Lưu",
  t_actions:"Thao tác",
  // Marketplace/Admin common errors
        err_name_required:"Vui lòng nhập tên.",
        err_min_amount:"Tối thiểu $500.",
        err_exceeds_available:"Vượt quá số vốn còn mở.",
        err_email:"Vui lòng nhập email hợp lệ.",
        err_phone:"Vui lòng nhập số điện thoại hợp lệ.",
        err_cc_name:"Vui lòng nhập tên trên thẻ.",
        err_cc_number:"Số thẻ không hợp lệ.",
        err_cc_exp:"Ngày hết hạn phải MM/YY và không ở quá khứ.",
        err_cc_cvc:"CVC phải 3–4 số.",
        err_cc_zip:"Vui lòng nhập mã bưu chính hợp lệ.",
        success_reserved:"Đăng ký thành công!",
  // Admin validation errors
  a_err_address_required:"Vui lòng nhập địa chỉ.",
  a_err_type_required:"Vui lòng chọn loại.",
  a_err_price_gt0:"Giá phải lớn hơn 0.",
  a_err_cap_required:"Phải nhập tỷ suất vốn hóa.",
  a_err_cap_range:"Tỷ suất vốn hóa phải từ 0 đến 100.",
  a_err_beds_required:"Phải nhập số phòng ngủ.",
  a_err_beds_nonneg:"Phòng ngủ không được âm.",
  a_err_baths_required:"Phải nhập số phòng tắm.",
  a_err_baths_nonneg:"Phòng tắm không được âm.",
  a_err_sqft_required:"Phải nhập diện tích.",
  a_err_sqft_nonneg:"Diện tích không được âm.",
  a_err_raise_required:"Phải nhập số vốn kêu gọi.",
  a_err_raise_gt0:"Số vốn kêu gọi phải lớn hơn 0.",
  a_err_img_required:"Phải nhập URL ảnh.",
  a_err_img_format:"URL ảnh phải bắt đầu bằng http(s) hoặc là data URL.",
  a_err_desc_required:"Phải nhập mô tả.",
        div_err_amt_gt0:"Số tiền phải lớn hơn 0.",
        div_confirm_clear:"Xóa tất cả cổ tức?",
        csv_date:"Ngày",
        csv_amount:"Số tiền",
        g_err_price:"Giá mua phải lớn hơn 0.",
        g_err_down:"Trả trước phải từ 0 đến 100.",
        g_err_rate:"Lãi suất không được âm.",
        g_err_term:"Kỳ hạn phải lớn hơn 0 năm.",
        g_err_app:"Tăng giá không được nhỏ hơn -100%.",
        g_err_extra:"Trả gốc thêm không được âm.",
        a_clear_form:"Xóa biểu mẫu",
        trash_title:"Thùng rác (Đã xóa)",
        trash_restore_all:"Khôi phục tất cả",
        trash_empty:"Dọn thùng rác",
        trash_restore:"Khôi phục",
        remove:"Xóa",
        listing_removed:"Đã xóa dự án.",
        undo:"Hoàn tác",
  trash_empty_confirm:"Dọn thùng rác vĩnh viễn?",
  // Confirm templates
  a_confirm_remove:"Xóa dự án này?\n{addr}",
  // SW update toast
  sw_update_available:"Có phiên bản mới",
  sw_refresh:"Tải lại",
  sw_dismiss:"Đóng"
      }
    };
    if(typeof I18N==='object'){
      I18N.en = Object.assign({}, I18N.en||{}, add.en);
      I18N.vi = Object.assign({}, I18N.vi||{}, add.vi);
    }
    var baseApply = window.applyI18n;
    window.applyI18n = function(lang){
      if(typeof baseApply==='function') baseApply(lang);
      var dict = (typeof I18N==='object' && I18N[lang])?I18N[lang]:(I18N.en||{});
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
        var k=el.getAttribute('data-i18n-placeholder'); if(dict[k]) el.setAttribute('placeholder', dict[k]);
      });
      document.querySelectorAll('[data-i18n-title]').forEach(function(el){
        var k=el.getAttribute('data-i18n-title'); if(dict[k]) el.setAttribute('title', dict[k]);
      });
      document.querySelectorAll('[data-i18n-aria-label]').forEach(function(el){
        var k=el.getAttribute('data-i18n-aria-label'); if(dict[k]) el.setAttribute('aria-label', dict[k]);
      });
    };
  }catch(e){}
})();
