var nguoiDungService = new NguoiDungService();
getListUser();

function getListUser() {
  nguoiDungService
    .layDanhSachNguoiDung()
    .then(function (result) {
      console.log(result.data);
      renderTable(result.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function themA() {
  console.log("gvh");
}
function renderTable(arr) {
  var contentHTML = "";
  arr.forEach(function (item, index) {
    contentHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.taiKhoan}</td>
        <td>${item.hoTen}</td>
        <td>${item.matKhau}</td>
        <td>${item.email}</td>
        <td>${item.soDT}</td>
        <td>${item.maLoaiNguoiDung}</td>
         <td>
            <button class="btn btn-info" data-toggle="modal" data-target="#myModal" id="suaUser" onclick="editUser(${
              item.id
            })">Sửa</button>
            <button class="btn btn-danger" onclick="delUser(${
              item.id
            })">Xóa</button>
            </td>
      </tr>
      `;
  });
  getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;
}

getEle("btnThemNguoiDung").addEventListener("click", function () {
  var footer =
    "<button class='btn btn-success' onclick='addUser();'>Add User</button>";
  getEle("TaiKhoan").removeAttribute("disabled", false);
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  document.getElementsByClassName("modal-title")[0].innerHTML = "ADD USER";
});

// add user

function addUser() {
  var taiKhoan = getEle("TaiKhoan").value;

  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loaiNguoiDung = getEle("loaiNguoiDung").value;

  var user = new NguoiDung(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    soDT,
    loaiNguoiDung
  );
  nguoiDungService
    .themNguoiDung(user)
    .then(function (result) {
      // tự động thêm vào k cần tải lại
      getListUser();
    })
    .catch(function (err) {
      console.log(err);
    });
}
function delUser(id) {
  nguoiDungService
    .xoaNguoiDung(id)
    .then(function (result) {
      getListUser();
    })
    .catch(function (err) {
      console.log(err);
    });
}
// Sua nguoi dung

function editUser(id) {
  console.log(id);
  var footer = `<button class='btn btn-success' onclick="updateUser('${id}')">Update User</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  document.getElementsByClassName("modal-title")[0].innerHTML = "UPDATE USER";

  nguoiDungService
    .layThongTin(id)
    .then(function (result) {
      getEle("TaiKhoan").value = result.data.taiKhoan;
      getEle("TaiKhoan").setAttribute("disabled", true);
      getEle("HoTen").value = result.data.hoTen;
      getEle("MatKhau").value = result.data.matKhau;
      getEle("Email").value = result.data.email;
      getEle("SoDienThoai").value = result.data.soDT;
      getEle("loaiNguoiDung").value = result.data.maLoaiNguoiDung;
    })
    .catch(function (err) {
      console.log(err);
    });
}
function updateUser(id) {
  var taiKhoan = getEle("TaiKhoan").value;
  var hoTen = getEle("HoTen").value;
  var matKhau = getEle("MatKhau").value;
  var email = getEle("Email").value;
  var soDT = getEle("SoDienThoai").value;
  var loaiNguoiDung = getEle("loaiNguoiDung").value;

  var user = new NguoiDung(
    taiKhoan,
    hoTen,
    matKhau,
    email,
    soDT,
    loaiNguoiDung
  );
  console.log(user);
  nguoiDungService
    .capNhatUser(id, user)
    .then(function () {
      getListUser();
    })
    .catch(function (err) {
      console.log(err);
    });
}
function getEle(id) {
  return document.getElementById(id);
}
