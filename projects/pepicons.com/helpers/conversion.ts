function getSvgUrl(svg: string) {
  return URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }))
}

function resizeCanvas(canvas: any, newWidth: number, newHeight: number) {
  const ctx = canvas.getContext('2d')
  const buffer = document.createElement('canvas')
  buffer.width = ctx.canvas.width
  buffer.height = ctx.canvas.height
  const ctxBuf = buffer.getContext('2d')
  if (!ctxBuf) throw new Error('no canvas found')

  let scaleX = newWidth / ctx.canvas.width
  let scaleY = newHeight / ctx.canvas.height

  let scaler = Math.min(scaleX, scaleY)
  //see if target scale is less than half...
  if (scaler < 0.5) {
    //while loop in case target scale is less than quarter...
    while (scaler < 0.5) {
      ctxBuf.canvas.width = ctxBuf.canvas.width * 0.5
      ctxBuf.canvas.height = ctxBuf.canvas.height * 0.5
      ctxBuf.scale(0.5, 0.5)
      ctxBuf.drawImage(canvas, 0, 0)
      ctxBuf.setTransform(1, 0, 0, 1, 0, 0)
      ctx.canvas.width = ctxBuf.canvas.width
      ctx.canvas.height = ctxBuf.canvas.height
      ctx.drawImage(buffer, 0, 0)

      scaleX = newWidth / ctxBuf.canvas.width
      scaleY = newHeight / ctxBuf.canvas.height
      scaler = Math.min(scaleX, scaleY)
    }
    //only if the scaler is now larger than half, double target scale trick...
    if (scaler > 0.5) {
      scaleX *= 2.0
      scaleY *= 2.0
      ctxBuf.canvas.width = ctxBuf.canvas.width * scaleX
      ctxBuf.canvas.height = ctxBuf.canvas.height * scaleY
      ctxBuf.scale(scaleX, scaleY)
      ctxBuf.drawImage(canvas, 0, 0)
      ctxBuf.setTransform(1, 0, 0, 1, 0, 0)
      scaleX = 0.5
      scaleY = 0.5
    }
  } else ctxBuf.drawImage(canvas, 0, 0)

  //wrapping things up...
  ctx.canvas.width = newWidth
  ctx.canvas.height = newHeight
  ctx.scale(scaleX, scaleY)
  ctx.drawImage(buffer, 0, 0)
  ctx.setTransform(1, 0, 0, 1, 0, 0)
}

async function svgUrlToPng(
  svgUrl: string,
  renderWidth?: number,
  renderHeight?: number,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const svgImage = document.createElement('img')
    svgImage.style.position = 'absolute'
    svgImage.style.top = '-9999px'
    document.body.appendChild(svgImage)
    svgImage.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = svgImage.clientWidth
      canvas.height = svgImage.clientHeight
      const canvasCtx = canvas.getContext('2d')
      if (!canvasCtx) return reject()
      canvasCtx.drawImage(svgImage, 0, 0)
      if (renderWidth && renderHeight) resizeCanvas(canvas, renderWidth, renderHeight)
      const imgData = canvas.toDataURL('image/png')
      resolve(imgData)
      document.body.removeChild(svgImage)
    }
    svgImage.src = svgUrl
  })
}
export async function svgToBase64Png(
  svg: string,
  renderWidth?: number,
  renderHeight?: number,
): Promise<string> {
  const url = getSvgUrl(svg)
  const imgData = await svgUrlToPng(url, renderWidth, renderHeight)
  URL.revokeObjectURL(url)
  return imgData
}

/**
 * Convert BASE64 to BLOB
 * @param base64Image Pass Base64 image data to convert into the BLOB
 */
export function base64ToBlob(base64Image: string) {
  // Split into two parts
  const parts = base64Image.split(';base64,')

  // Hold the content type
  const imageType = parts[0].split(':')[1]

  // Decode Base64 string
  const decodedData = window.atob(parts[1])

  // Create UNIT8ARRAY of size same as row data length
  const uInt8Array = new Uint8Array(decodedData.length)

  // Insert all character code into uInt8Array
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i)
  }

  // Return BLOB image after conversion
  return new Blob([uInt8Array], { type: imageType })
}
