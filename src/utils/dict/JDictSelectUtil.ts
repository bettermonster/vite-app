/**
 * 字典值替换文本通用方法
 * @param dictOptions  字典数组
 * @param text  字典值
 * @return String
 */
export function filterDictText(dictOptions: any, text: any) {
  // --update-begin----author:sunjianlei---date:20200323------for: 字典翻译 text 允许逗号分隔 ---
  if (text != null && Array.isArray(dictOptions)) {
    let result: any = [];
    // 允许多个逗号分隔，允许传数组对象
    let splitText;
    if (Array.isArray(text)) {
      splitText = text;
    } else {
      splitText = text.toString().trim().split(',');
    }
    for (let txt of splitText) {
      let dictText = txt;
      for (let dictItem of dictOptions) {
        if (txt.toString() === dictItem.key.toString()) {
          dictText = dictItem.value || dictItem.title || dictItem.label || dictItem.text;
          break;
        }
      }
      result.push(dictText);
    }
    return result.join(',');
  }
  return text;
  // --update-end----author:sunjianlei---date:20200323------for: 字典翻译 text 允许逗号分隔 ---
}
