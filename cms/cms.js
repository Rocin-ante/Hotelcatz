// 获取页面列表和表单元素
const pageForm = document.getElementById("pageForm");
const pageTitleInput = document.getElementById("pageTitle");
const pageUrlInput = document.getElementById("pageUrl");
const pagesList = document.getElementById("pagesList");

// 初始化页面链接列表
let pages = JSON.parse(localStorage.getItem("pages")) || [];

// 显示当前所有的页面链接
function displayPages() {
    pagesList.innerHTML = '';
    pages.forEach((page, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${page.title} - <a href="${page.url}" target="_blank">${page.url}</a> <button onclick="deletePage(${index})">删除</button>`;
        pagesList.appendChild(li);
    });
}

// 删除页面链接
function deletePage(index) {
    pages.splice(index, 1);
    localStorage.setItem("pages", JSON.stringify(pages));  // 保存到localStorage
    displayPages();
}

// 处理表单提交，添加新的页面链接
pageForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = pageTitleInput.value.trim();
    const url = pageUrlInput.value.trim();

    if (title && url) {
        const newPage = { title, url };
        pages.push(newPage);
        localStorage.setItem("pages", JSON.stringify(pages));  // 保存到localStorage
        displayPages();
        
        pageTitleInput.value = '';
        pageUrlInput.value = '';
    }
});

// 初始化显示页面列表
displayPages();
