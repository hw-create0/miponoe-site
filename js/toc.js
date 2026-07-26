// 目次の自動生成 + ボタン風リンクの装飾(旧サイト風)
document.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector(".blog-body");
  if (!body) return;
  // 単独リンク段落 → ボタン化
  body.querySelectorAll("p").forEach(function (p) {
    var a = p.querySelector("a");
    if (a && p.textContent.trim() === a.textContent.trim()) a.classList.add("cta-btn");
  });
  // 目次
  var hs = body.querySelectorAll("h2");
  if (hs.length < 2) return;
  var box = document.createElement("div");
  box.className = "toc";
  var html = '<div class="toc-title">目次</div><ol>';
  hs.forEach(function (h, i) {
    h.id = "sec" + i;
    html += '<li><a href="#sec' + i + '">' + h.textContent + "</a></li>";
  });
  box.innerHTML = html + "</ol>";
  body.insertBefore(box, hs[0]);
});
