let uploading = false;
const drop = document.querySelector(".drop-section");
const fileUpload = document.querySelector(".file-input");
const fileName = document.querySelector(".file-name");
const uploadImg = document.querySelector(".upload");
const btn = document.querySelector(".upload-btn");
const sync = document.querySelector(".syncing");
const done = document.querySelector(".done");
const bar = document.querySelector(".bar");

fileUpload.addEventListener("change", () => {
  fileName.textContent = fileUpload.files[0].name;
  uploadImg.style.display = "none";
});

btn.addEventListener("click", () => {
  if (!uploading && fileName.innerHTML != "") {
    uploading = true;
    btn.innerHTML = "Uploading...";
    drop.style.display = "none";
    sync.classList.add("sync-active");
    done.classList.add("done-active");
    bar.classList.add("bar-active");
    window.setTimeout(() => {
      btn.innerHTML = "Done";
    }, 3200
    );
  }
});
