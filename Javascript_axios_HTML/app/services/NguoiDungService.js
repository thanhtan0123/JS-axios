function NguoiDungService() {
  this.layDanhSachNguoiDung = function () {
    return axios({
      url: "https://5eea03d7b13d0a00164e409e.mockapi.io/api/NguoiDung",
      method: "GET",
    });
  };
  this.themNguoiDung = function (user) {
    return axios({
      url: "https://5eea03d7b13d0a00164e409e.mockapi.io/api/NguoiDung",
      method: "POST",
      data: user,
    });
  };
  this.xoaNguoiDung = function (id) {
    return axios({
      url: `https://5eea03d7b13d0a00164e409e.mockapi.io/api/NguoiDung/${id}`,
      method: "DELETE",
    });
  };
  this.layThongTin = function (id) {
    return axios({
      url: `https://5eea03d7b13d0a00164e409e.mockapi.io/api/NguoiDung/${id}`,
      method: "GET",
    });
  };
  this.capNhatUser = function (id, user) {
    return axios({
      url: `https://5eea03d7b13d0a00164e409e.mockapi.io/api/NguoiDung/${id}`,
      method: "PUT",
      data: user,
    });
  };
}
