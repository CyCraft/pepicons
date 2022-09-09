declare global {
  interface Navigator {
    msSaveOrOpenBlob: (blobOrBase64: Blob | string, filename: string) => void
  }
}

export function downloadBase64AsFile(base64string: string, filename: string): void {
  // IE10+
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(base64string, filename)
    return
  }
  const a = document.createElement('a')
  a.href = base64string
  a.download = filename
  a.style.position = 'absolute'
  a.style.top = '-9999px'
  document.body.appendChild(a)
  a.click()
  setTimeout(function () {
    document.body.removeChild(a)
  }, 1)
}

export function downloadFile(data: string, filename: string, type = 'text/csv'): void {
  const file = new Blob([data], { type: type })
  // IE10+
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(file, filename)
    return
  }
  const a = document.createElement('a')
  const url = URL.createObjectURL(file) // looks like `blob:https://...`
  a.href = url
  a.download = filename
  a.style.position = 'absolute'
  a.style.top = '-9999px'
  document.body.appendChild(a)
  a.click()
  setTimeout(function () {
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }, 1)
}
