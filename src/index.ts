// 通过软件的安装协议，检测是否安装
/**
 * uri 打开客户端的uri
 * failCb 打开客户端失败回调
 * successCb 打开客户端成功回调
 */
function openUri(
  uri: string,
  failCb: () => void,
  successCb?: () => void
): void {
  const target = document.createElement("input");
  target.style.width = "0";
  target.style.height = "0";
  target.style.position = "fixed";
  target.style.top = "0";
  target.style.left = "0";
  document.body.appendChild(target);

  target.focus();
  const handler = _registerEvent(target, "blur", onBlur);

  location.href = uri;

  const timeout = setTimeout(() => {
    failCb && failCb();
    handler.remove();
    document.body.removeChild(target);
  }, 1000);
  function onBlur() {
    successCb && successCb();
    handler.remove();
    clearTimeout(timeout);
    document.body.removeChild(target);
  }
}
function _registerEvent(
  target: HTMLInputElement,
  eventType: string,
  cb: EventListener
) {
  target.addEventListener(eventType, cb);
  return {
    remove() {
      target.removeEventListener(eventType, cb);
    },
  };
}

export default openUri;

export { openUri };
