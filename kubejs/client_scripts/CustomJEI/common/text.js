// priority: 6144

/**
 * pX pY 为文本的左上角，pLineWidth 为文本的宽度，超过宽度会自动换行
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {net.minecraft.client.gui.Font} pFont
 * @param {net.minecraft.network.chat.Component} pText
 * @param {number} pX
 * @param {number} pY
 * @param {number} pLineWidth
 * @param {number} pColor
 * @param {boolean} pDropShadow
 */
const drawWordWrap = (guiGraphics, pFont, pText, pX, pY, pLineWidth, pColor, pDropShadow) => {
  for (
    let iter = pFont.split(pText, pLineWidth).iterator();
    iter.hasNext();
    pY += pFont.lineHeight + 1
  ) {
    let formattedcharsequence = iter.next();
    guiGraphics[
      'drawString(net.minecraft.client.gui.Font,net.minecraft.util.FormattedCharSequence,float,float,int,boolean)'
    ](pFont, formattedcharsequence, pX, pY, pColor, pDropShadow);
  }
};

/**
 * pX pY 为文本的居中的最上点
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {net.minecraft.client.gui.Font} pFont
 * @param {net.minecraft.network.chat.Component} pText
 * @param {number} pX
 * @param {number} pY
 * @param {number} pColor
 * @param {boolean} pDropShadow
 */
const drawCenteredString = (guiGraphics, pFont, pText, pX, pY, pColor, pDropShadow) => {
  let iter = pFont.split(pText, 9999).iterator();
  if (iter.hasNext()) {
    let formattedcharsequence = iter.next();
    let width = Client.font.width(pText.getString());
    guiGraphics[
      'drawString(net.minecraft.client.gui.Font,net.minecraft.util.FormattedCharSequence,float,float,int,boolean)'
    ](pFont, formattedcharsequence, pX - width / 2, pY, pColor, pDropShadow);
  }
};

/**
 * pX pY 为文本的右上角
 * @param {Internal.GuiGraphics} guiGraphics
 * @param {net.minecraft.client.gui.Font} pFont
 * @param {net.minecraft.network.chat.Component} pText
 * @param {number} pX
 * @param {number} pY
 * @param {number} pColor
 * @param {boolean} pDropShadow
 */
const drawRightAlignedString = (guiGraphics, pFont, pText, pX, pY, pColor, pDropShadow) => {
  let iter = pFont.split(pText, 9999).iterator();
  if (iter.hasNext()) {
    let formattedcharsequence = iter.next();
    let width = Client.font.width(pText.getString());
    guiGraphics[
      'drawString(net.minecraft.client.gui.Font,net.minecraft.util.FormattedCharSequence,float,float,int,boolean)'
    ](pFont, formattedcharsequence, pX - width, pY, pColor, pDropShadow);
  }
};
