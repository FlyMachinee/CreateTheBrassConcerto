// priority: 4096

/**
 * 枚举类，请使用 Alignment.xxx 来获取实例
 * @param {string} name
 */
function Alignment(name) {
  this.name = name;
}

/**
 * @return {string}
 */
Alignment.prototype.toString = function () {
  return this.name;
};

Alignment.LEFT = new Alignment('left');
Alignment.RIGHT = new Alignment('right');
Alignment.CENTER = new Alignment('center');

/**
 * @return {Alignment[]}
 */
Alignment.values = function () {
  return [Alignment.LEFT, Alignment.RIGHT, Alignment.CENTER];
};

/**
 * @param {string} str
 * @return {Alignment|null}
 */
Alignment.fromString = function (str) {
  return Alignment[str.toUpperCase()] || null;
};

/**
 * 枚举类，请使用 BorderStyle.xxx 来获取实例
 * @param {string} name
 */
function BorderStyle(name) {
  this.name = name;
}

/**
 * @return {string}
 */
BorderStyle.prototype.toString = function () {
  return this.name;
};

BorderStyle.ALL = new Alignment('all');
BorderStyle.NONE = new Alignment('none');
BorderStyle.ACADEMIC = new Alignment('academic');

/**
 * @return {BorderStyle[]}
 */
BorderStyle.values = function () {
  return [BorderStyle.ALL, Alignment.NONE, Alignment.ACADEMIC];
};

/**
 * @param {string} str
 * @return {BorderStyle|null}
 */
BorderStyle.fromString = function (str) {
  return BorderStyle[str.toUpperCase()] || null;
};

function SimpleTable() {
  /**
   * 表格数据，二维数组，第一维表示行，第二维表示列
   * @type {Internal.FormattedCharSequence[][]}
   */
  this.rows = [];

  /**
   * 单元格对齐信息，二维数组，第一维表示行，第二维表示列
   * @type {Alignment[][]}
   */
  this.alignment = [];

  /**
   * 单元格 tooltip 信息，二维数组，第一维表示行，第二维表示列
   * @type {(function(Internal.ITooltipBuilder): void)[][]}
   */
  this.tooltipCallback = [];

  /**
   * 单元格点击回调，参数为被点击的单元格的行列索引，默认为返回 false 的常函数
   * @param {number} row
   * @param {number} col
   * @return {boolean} 返回值为 true 则表示点击事件被处理
   */
  this.onClickCallback = (row, col) => false;

  /**
   * 每行的高度，单位像素，不包括线宽度
   * @type {number[]}
   */
  this.rowHeight = [SimpleTable.DefaultRowHeight];

  /**
   * 每列的宽度，单位像素，不包括线宽度
   * @type {number[]}
   */
  this.columnWidth = [SimpleTable.DefaultColumnWidth];

  this.x = 0;
  this.y = 0;
  this.font = Client.font;
  this.color = Color.BLACK.rgbJS;
  this.dropShadow = false;
  this.lineWidth = 1;
  this.lineColor = Color.BLACK.argbJS;
  this.style = BorderStyle.ALL;
  this.playSound = true;

  /**
   * 左右内边距
   * @type {number}
   */
  this.padding = 2;
}

SimpleTable.DefaultRowHeight = 12;
SimpleTable.DefaultColumnWidth = 40;
SimpleTable.NilRowHeight = 1;
SimpleTable.NilColumnWidth = 1;

/**
 * @param {Internal.GuiGraphics} guiGraphics
 */
SimpleTable.prototype.draw = function (guiGraphics) {
  switch (this.style) {
    case BorderStyle.ALL:
      this.drawAllBorder(guiGraphics);
      break;
    case BorderStyle.ACADEMIC:
      this.drawAcademicBorder(guiGraphics);
      break;
  }
  this.drawContent(guiGraphics);
};

/**
 * @param {Internal.GuiGraphics} guiGraphics
 */
SimpleTable.prototype.drawContent = function (guiGraphics) {
  // 绘制单元格内容

  // 单元格内容的左上角坐标
  const startX = this.x + this.lineWidth;
  const startY = this.y + this.lineWidth;

  let cellY = startY;
  let lastRow = 0;
  // 有优化空间
  this.rows.forEach((thisRow, row) => {
    for (let i = lastRow; i < row; i++) {
      cellY += this.lineWidth + (this.rowHeight[i] || SimpleTable.NilRowHeight);
    }
    lastRow = row;
    if (!thisRow || thisRow.length === 0) {
      return;
    }
    let cellX = startX;
    let lastCol = 0;
    thisRow.forEach((cell, col) => {
      for (let i = lastCol; i < col; i++) {
        cellX += this.lineWidth + (this.columnWidth[i] || SimpleTable.NilColumnWidth);
      }
      lastCol = col;
      if (!cell) {
        return;
      }
      let alignment = this.getAlignment(row, col) || Alignment.CENTER;
      let cellWidth = this.columnWidth[col] || SimpleTable.NilColumnWidth;
      let cellHeight = this.rowHeight[row] || SimpleTable.NilRowHeight;
      let textX;
      let textY = cellY + (cellHeight - this.font.lineHeight) / 2;
      switch (alignment) {
        case Alignment.LEFT:
          textX = cellX + this.padding;
          drawWordWrap(guiGraphics, this.font, cell, textX, textY, 9999, this.color, this.dropShadow);
          break;
        case Alignment.RIGHT:
          textX = cellX + cellWidth - this.padding;
          drawRightAlignedString(guiGraphics, this.font, cell, textX, textY, this.color, this.dropShadow);
          break;
        case Alignment.CENTER:
          textX = cellX + cellWidth / 2;
          drawCenteredString(guiGraphics, this.font, cell, textX, textY, this.color, this.dropShadow);
          break;
      }
    });
  });
};

/**
 * @param {Internal.GuiGraphics} guiGraphics
 */
SimpleTable.prototype.drawAllBorder = function (guiGraphics) {
  // 绘制单元格边界线

  const startX = this.x;
  const startY = this.y;
  const tableWidth = this.getTableWidth();
  const tableHeight = this.getTableHeight();
  const endX = startX + tableWidth;
  const endY = startY + tableHeight;
  const rowCount = this.getRowCount();
  const columnCount = this.getColumnCount();

  // 所有横线
  guiGraphics.fill(startX, startY, endX, startY + this.lineWidth, this.lineColor);
  let lineY = startY;
  for (let row = 0; row < rowCount; row++) {
    lineY += (this.rowHeight[row] || SimpleTable.NilRowHeight) + this.lineWidth;
    guiGraphics.fill(startX, lineY, endX, lineY + this.lineWidth, this.lineColor);
  }

  // 所有竖线
  guiGraphics.fill(startX, startY, startX + this.lineWidth, endY, this.lineColor);
  let lineX = startX;
  for (let col = 0; col < columnCount; col++) {
    lineX += (this.columnWidth[col] || SimpleTable.NilColumnWidth) + this.lineWidth;
    guiGraphics.fill(lineX, startY, lineX + this.lineWidth, endY, this.lineColor);
  }
};

/**
 * @param {Internal.GuiGraphics} guiGraphics
 */
SimpleTable.prototype.drawAcademicBorder = function (guiGraphics) {
  // 绘制学术三线表边界线

  const startX = this.x;
  const startY = this.y;
  const tableWidth = this.getTableWidth();
  const tableHeight = this.getTableHeight();
  const endX = startX + tableWidth;
  const rowCount = this.getRowCount();

  // 第一条粗横线
  let lineY = startY - 1;
  guiGraphics.fill(startX, lineY, endX + this.lineWidth, lineY + this.lineWidth * 2, this.lineColor);

  // 第二条细横线
  if (rowCount > 0) {
    let lineY = startY + (this.rowHeight[0] || SimpleTable.NilRowHeight) + this.lineWidth;
    guiGraphics.fill(startX, lineY, endX + this.lineWidth, lineY + this.lineWidth, this.lineColor);
  }

  // 第三条粗横线
  lineY = startY + tableHeight;
  guiGraphics.fill(startX, lineY, endX + this.lineWidth, lineY + this.lineWidth * 2, this.lineColor);
};

/**
 * @param {number} mouseX
 * @param {number} mouseY
 * @returns {boolean}
 */
SimpleTable.prototype.isMouseOver = function (mouseX, mouseY) {
  const startX = this.x;
  const startY = this.y;
  const endX = startX + this.getTableWidth();
  const endY = startY + this.getTableHeight();
  return mouseX >= startX && mouseX <= endX && mouseY >= startY && mouseY <= endY;
};

/**
 * @param {number} mouseX
 * @param {number} mouseY
 * @returns {{row: number, col: number}|null} 返回鼠标所在的单元格的行列索引，如果不在任何单元格上则返回 null
 */
SimpleTable.prototype.getIndexByPosition = function (mouseX, mouseY) {
  const startX = this.x;
  const startY = this.y;
  let cellY = startY + this.lineWidth;
  let rowIndex = null;
  const rowCount = this.getRowCount();
  for (let row = 0; row < rowCount; row++) {
    let cellHeight = this.rowHeight[row] || SimpleTable.NilRowHeight;
    if (mouseY >= cellY && mouseY <= cellY + cellHeight) {
      rowIndex = row;
      break;
    }
    cellY += cellHeight + this.lineWidth;
  }

  if (rowIndex === null) {
    return null;
  }

  let cellX = startX + this.lineWidth;
  let colIndex = null;
  const columnCount = this.getColumnCount();
  for (let col = 0; col < columnCount; col++) {
    let cellWidth = this.columnWidth[col] || SimpleTable.NilColumnWidth;
    if (mouseX >= cellX && mouseX <= cellX + cellWidth) {
      colIndex = col;
      break;
    }
    cellX += cellWidth + this.lineWidth;
  }
  if (colIndex === null) {
    return null;
  }
  return { row: rowIndex, col: colIndex };
};

/**
 * @param {Internal.ITooltipBuilder} tooltip
 * @param {number} mouseX
 * @param {number} mouseY
 */
SimpleTable.prototype.handleTooltip = function (tooltip, mouseX, mouseY) {
  const index = this.getIndexByPosition(mouseX, mouseY);
  if (!index) {
    return;
  }

  const callback = this.tooltipCallback[index.row] ? this.tooltipCallback[index.row][index.col] : null;
  if (callback) {
    callback(tooltip);
  }
};

/**
 * 处理输入事件，返回值为 true 则表示事件被处理
 * @param {number} mouseX
 * @param {number} mouseY
 * @param {Internal.InputConstants$Key} input
 * @return {boolean}
 */
SimpleTable.prototype.handleInput = function (mouseX, mouseY, input) {
  // 仅处理鼠标左键点击
  if (input !== $InputConstants.Type.MOUSE.getOrCreate(0)) {
    return false;
  }

  // 鼠标是否在表格内
  const position = this.getIndexByPosition(mouseX, mouseY);
  if (!position) {
    return false;
  }

  // 执行点击回调
  if (this.onClickCallback(position.row, position.col)) {
    if (this.playSound) {
      Client.getSoundManager().play(
        $SimpleSoundInstance.forUI($SoundEvents.UI_BUTTON_CLICK.value(), 1.0, 0.25)
      );
    }
    return true;
  }
  return false;
};

/**
 * @param {Internal.FormattedCharSequence[]} row
 * @returns {SimpleTable}
 */
SimpleTable.prototype.pushRow = function (row) {
  const len = this.rows.push(row);
  if (!this.rowHeight[len - 1]) {
    this.rowHeight[len - 1] = SimpleTable.DefaultRowHeight;
  }
  if (!this.alignment[len - 1]) {
    this.alignment[len - 1] = [];
  }
  if (!this.tooltipCallback[len - 1]) {
    this.tooltipCallback[len - 1] = [];
  }
  row.forEach((cell, col) => {
    if (cell) {
      if (!this.columnWidth[col]) {
        this.columnWidth[col] = SimpleTable.DefaultColumnWidth;
      }
      if (!this.alignment[len - 1][col]) {
        this.alignment[len - 1][col] = Alignment.CENTER;
      }
    }
  });
  return this;
};

/**
 * @param {number} row
 * @param {number} count
 * @returns {SimpleTable}
 */
SimpleTable.prototype.deleteRow = function (row, count) {
  this.rows.splice(row, count);
  this.rowHeight.splice(row, count);
  this.alignment.splice(row, count);
  this.tooltipCallback.splice(row, count);
  return this;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {Internal.FormattedCharSequence} content
 * @returns {SimpleTable}
 */
SimpleTable.prototype.setCell = function (row, col, content) {
  if (!this.rows[row]) {
    this.rows[row] = [];
  }
  if (!this.rowHeight[row]) {
    this.rowHeight[row] = SimpleTable.DefaultRowHeight;
  }
  if (!this.alignment[row]) {
    this.alignment[row] = [];
  }
  if (!this.tooltipCallback[row]) {
    this.tooltipCallback[row] = [];
  }

  this.rows[row][col] = content;
  if (!this.columnWidth[col]) {
    this.columnWidth[col] = SimpleTable.DefaultColumnWidth;
  }
  if (!this.alignment[row][col]) {
    this.alignment[row][col] = Alignment.CENTER;
  }
  return this;
};

/**
 * @param {number} row
 * @param {number} col
 * @returns {Internal.FormattedCharSequence}
 */
SimpleTable.prototype.getCell = function (row, col) {
  return this.rows[row] ? this.rows[row][col] : undefined;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {function(Internal.ITooltipBuilder): void} callback
 * @returns {SimpleTable}
 */
SimpleTable.prototype.setTooltipCallback = function (row, col, callback) {
  if (!this.tooltipCallback[row]) {
    this.tooltipCallback[row] = [];
  }
  this.tooltipCallback[row][col] = callback;
  return this;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {Internal.FormattedText} tooltip
 * @returns {SimpleTable}
 */
SimpleTable.prototype.setTooltip = function (row, col, tooltip) {
  return this.setTooltipCallback(row, col, (builder) => builder.add(tooltip));
};

/**
 * @param {function(number, number): boolean} callback
 * @returns {SimpleTable}
 */
SimpleTable.prototype.onClick = function (callback) {
  this.onClickCallback = callback;
  return this;
};

/**
 * @returns {SimpleTable}
 */
SimpleTable.prototype.clearContent = function () {
  this.rows = [];
  this.tooltipCallback = [];
  return this;
};

/**
 * @returns {SimpleTable}
 */
SimpleTable.prototype.clearAll = function () {
  this.rows = [];
  this.tooltipCallback = [];
  this.alignment = [];
  this.rowHeight = [SimpleTable.DefaultRowHeight];
  this.columnWidth = [SimpleTable.DefaultColumnWidth];
  return this;
};

SimpleTable.prototype.getRowCount = function () {
  return this.rows.length;
};

SimpleTable.prototype.getColumnCount = function () {
  return this.rows.reduce((max, row) => Math.max(max, row.length), 0);
};

/**
 * @param {number} row
 * @param {number} column
 * @returns {Alignment}
 */
SimpleTable.prototype.getAlignment = function (row, column) {
  return this.alignment[row] ? this.alignment[row][column] : undefined;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {Alignment} alignment
 * @returns {SimpleTable}
 */
SimpleTable.prototype.setAlignment = function (row, col, alignment) {
  if (!this.alignment[row]) {
    this.alignment[row] = [];
  }
  this.alignment[row][col] = alignment;
  return this;
};

SimpleTable.prototype.getTableWidth = function () {
  let width = this.lineWidth;
  const columnCount = this.getColumnCount();
  for (let i = 0; i < columnCount; i++) {
    width += (this.columnWidth[i] || SimpleTable.NilColumnWidth) + this.lineWidth;
  }
  return width;
};

SimpleTable.prototype.getTableHeight = function () {
  let height = this.lineWidth;
  const rowCount = this.getRowCount();
  for (let i = 0; i < rowCount; i++) {
    height += (this.rowHeight[i] || SimpleTable.NilRowHeight) + this.lineWidth;
  }
  return height;
};

/**
 * @param {number} row
 * @param {number} height
 * @returns {SimpleTable}
 */
SimpleTable.prototype.setRowHeight = function (row, height) {
  this.rowHeight[row] = height;
  return this;
};

/**
 * @param {number} col
 * @param {number} width
 * @returns {SimpleTable}
 */
SimpleTable.prototype.setColumnWidth = function (col, width) {
  this.columnWidth[col] = width;
  return this;
};

/**
 * @param {number} x
 * @param {number} y
 * @returns {SimpleTable}
 */
SimpleTable.prototype.setPosition = function (x, y) {
  this.x = x;
  this.y = y;
  return this;
};

/**
 * @param {number} row
 * @param {number} col
 * @return {{x: number, y: number}} 单元格内容的左上角坐标
 */
SimpleTable.prototype.getCellPosition = function (row, col) {
  const startX = this.x;
  const startY = this.y;
  let cellY = startY + this.lineWidth;
  for (let i = 0; i < row; i++) {
    cellY += (this.rowHeight[i] || SimpleTable.NilRowHeight) + this.lineWidth;
  }
  let cellX = startX + this.lineWidth;
  for (let i = 0; i < col; i++) {
    cellX += (this.columnWidth[i] || SimpleTable.NilColumnWidth) + this.lineWidth;
  }
  return { x: cellX, y: cellY };
};

/**
 * @param {number} row
 * @param {number} col
 * @return {{width: number, height: number}} 单元格内容的宽高
 */
SimpleTable.prototype.getCellSize = function (row, col) {
  const width = this.columnWidth[col] || SimpleTable.NilColumnWidth;
  const height = this.rowHeight[row] || SimpleTable.NilRowHeight;
  return { width: width, height: height };
};
