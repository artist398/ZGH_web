/**
 * 门店联系方式 — 部署前请改为真实邮箱、电话、地址与地图链接。
 * 在线预约第二按钮使用 Telegram（t.me）；WhatsApp 仅保留备用链接。
 */
export const SALON_CONTACT = {
  bookingEmail: "booking@example.com",
  /** 用于 tel: 链接，建议含国家码，如 +855123456789 */
  phoneTel: "+855964313888",
  /** 页脚等处展示的号码（可与 phoneTel 格式略有不同，便于阅读） */
  phoneDisplay: "096 431 3888",
  /** 备用：WhatsApp https://wa.me/国家码号码（无 + 无空格）；当前预约弹窗已改用 Telegram */
  whatsappUrl: "https://wa.me/855964313888",
  /**
   * Google Maps 等外链；留空则隐藏「地图」按钮。
   * 示例：https://maps.google.com/?q=11.5564,104.9282
   */
  mapsUrl: "",
  /** Telegram：用户名不含 @，链接为 https://t.me/用户名 */
  telegramUrl: "https://t.me/ChinaRedBeautyBubhairsalon",
  telegramDisplay: "@ChinaRedBeautyBubhairsalon",
} as const;
