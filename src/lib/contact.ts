/**
 * 门店联系方式 — 部署前请改为真实邮箱、电话、地址与地图链接。
 * WhatsApp：https://wa.me/国家码号码（无 + 无空格）
 */
export const SALON_CONTACT = {
  bookingEmail: "booking@example.com",
  /** 用于 tel: 链接，建议含国家码，如 +855123456789 */
  phoneTel: "+855000000000",
  /** 页脚等处展示的号码（可与 phoneTel 格式略有不同，便于阅读） */
  phoneDisplay: "+855 00 000 0000",
  /** 留空则隐藏 WhatsApp 按钮 */
  whatsappUrl: "https://wa.me/855000000000",
  /**
   * Google Maps 等外链；留空则隐藏「地图」按钮。
   * 示例：https://maps.google.com/?q=11.5564,104.9282
   */
  mapsUrl: "",
} as const;
