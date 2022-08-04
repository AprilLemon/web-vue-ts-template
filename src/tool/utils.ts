/* eslint-disable */
// @ts-nocheck
// 正则图片
export const isImage = (url) => {
  const imageRegExp = /\.(BMP|JPG|PNG|TIF|GIF|PCX|TGA|EXIF|FPX|SVG|PSD|CDR|PCD|DXF|UFO|EPS|AI|RAW|WMF|WEBP)$/i
  return imageRegExp.test(url)
}
// 正则office文件
export const isOffice = (url) => {
  const officeRegExp =
    /\.(PDF|PPTX|PPTM|PPT|POTX|POTM|POT|PPSX|PPSM|PPS|PPAM|PPA|PPTX|ODP|XLSX|XLSM|XLSB|XLS|XLTX|XLTM|XLT|XML|XLS|CSV|PRN|DIF|SLK|XLAM|XLA|XLSX|ODS|DOCX|DOCM|DOC|DOTX|DOTM|DOT|XPS|RTF)$/i
  return officeRegExp.test(url)
}

export const getCnWeek = (date = new Date()) => {
  const WEEK = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
  }
  return WEEK[date.getDay()]
}

// 格式化无效数据
export const formatNull = (val) => {
  const error = ['undefined', 'null', '[]', '{}', undefined, null]
  return error.includes(val) ? '' : val
}

// 格式化无效数据
export const isNull = (val) => {
  const error = ['undefined', 'null', '[]', '{}', undefined, null]
  return error.includes(val) ? true : false
}

/**
 * 生成跳转路径
 */
interface GenerateJumpPath {
  url: string,
  params: AnyObject | undefined
}

export const generateJumpPath = (data: GenerateJumpPath) => {
  const { url, params } = data
  if (params && params instanceof Object && !Array.isArray(params)) {
    const keys = Object.keys(params)
    let str = ''
    keys.forEach((key, index) => {
      if (index === 0) {
        str = '?' + key + '=' + formatNull(params[key])
      } else {
        str += '&' + key + '=' + formatNull(params[key])
      }
    })
    return url + str
  } else {
    return url
  }
}

// 恢复路径传参值类型
export function resolveQuery (data: AnyObject): AnyObject {
  if (!data) return {}
  const keys = Object.keys(data)
  const result = {}
  for (const key of keys) {
    switch (data[key]) {
      case 'true':
        result[key] = true
        break;
      case 'false':
        result[key] = false
        break;
      case '[]':
        result[key] = []
        break;
      case '{}':
        result[key] = {}
        break;
      case 'null':
        result[key] = null
        break;
      case 'undefined':
        result[key] = undefined
        break;
      default:
        result[key] = data[key]
    }

    const isArray = data[key].startsWith('[') && data[key].endsWith(']')
    const isObject = data[key].startsWith('{') && data[key].endsWith('}')
    if (isArray || isObject) {
      try {
        result[key] = JSON.parse(data[key])
      } catch (e) {
        console.error('数组或对象格式不正确，parse解析失败', e)
      }
    }
  }

  return result
}

/**
 * 删除空字段
 * @param emptyKey 空字段key
 * @param childrenKey 遍历子集key
 * @param list 原数组
 */
export const deleteEmptyField = ({ emptyKey = '', childrenKey = '', list = [] }) => {
  for (const item of list) {
    const emptyArray = Array.isArray(item[emptyKey]) && item[emptyKey].length === 0
    const emptyStatus = ['null', 'undefined', null, undefined]
    const emptyVal = emptyStatus.includes(item[emptyKey])
    if (emptyArray || emptyVal) {
      Reflect.deleteProperty(item, emptyKey)
    }
    if (item[childrenKey] && item[childrenKey].length !== 0) {
      deleteEmptyField({
        emptyKey,
        childrenKey,
        list: item[childrenKey],
      })
    }
  }
}

//  图片匹配正则
export const imageRegEx = /<img src.*?(?:\>|\/>)/ig
export const srcRegEx = /src=[\'\"]?([^\'\"]*)[\'\"]?/i
export const withRegEx = /width=[\'\"]?([^\'\"]*)[\'\"]?/i

/**
 * html标签替换
 * @param html
 * @param replace
 * @returns {string}
 */
export const htmlReplace = (html = '', replace = '') => {
  if (!html) return html
  const htmlRegEx = /<\/?.+?\/?>/ig
  const spaceRegEx = /&nbsp;?/ig
  return html.replaceAll(htmlRegEx, replace).replaceAll(spaceRegEx, ' ')
}

/**
 * 图片标签替换
 * @param html
 * @param replace
 * @returns {string}
 */
export const imageReplace = (html = '', replace = '') => {
  if (!html) return html
  const htmlRegEx = /<img src.*?(?:\>|\/>)/ig
  return html.replaceAll(htmlRegEx, replace)
}

/**
 * 富文本 图片替换
 * @param html
 */
export const richImageReplace = (html = '') => {
  if (!html) return ''
  const images = html.match(imageRegEx)
  images && images.forEach(image => {
    html = html.replace(image, () => {
      const widthList = image.match(withRegEx)
      if (widthList && widthList.length !== 0) {
        return image
      } else {
        const data = image.match(srcRegEx)
        return `<img src="${data[1]}" style="width:100%" />`
      }
    })
  })
  return html
}
export const replaceAllHtml = (html = '') => {
  if (!html) return ''
  return html.replace(/<[^>]+>|&[^>]+;/g, '').trim()
}

/**
 * 格式化数字
 */
export const formatNumber = (n) => {
  if (isNull(n) || !n || !Number(n)) {
    return '-'
  }
  var b = parseInt(n).toString()
  var len = b.length
  if (len <= 3) {
    return b
  }
  var r = len % 3
  return r > 0 ? b.slice(0, r) + ',' + b.slice(r, len).match(/\d{3}/g).join(',') : b.slice(r, len).match(/\d{3}/g).join(',')
}


// 计算距离函数
function calcRad (d) {
  //根据经纬度判断距离
  return d * Math.PI / 180.0
}

export function getDistance (lat1, lng1, lat2, lng2) {
  var radLat1 = calcRad(lat1)
  var radLat2 = calcRad(lat2)
  var a = radLat1 - radLat2
  var b = calcRad(lng1) - calcRad(lng2)
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
  s = s * 6378.137 // EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000 //输出为公里

  var distance = s
  var distance_str = ''

  if (parseInt(distance) >= 1) {
    distance_str = distance.toFixed(1) + 'km'
  } else {
    distance_str = distance * 1000 + 'm'
  }
  //s=s.toFixed(4);

  console.info('距离是', s)
  console.info('距离是', distance_str)
  return s
}
