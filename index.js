// Bài 1: tính tiền lương nhân viên
// đề bài: viết chương trình tính tiền lương nhân viên. Lương 1 ngày : 100.000,cho người dùng nhập vào số ngày làm. 
/* Mô hình 3 khối:
+ input: lương ngày 1 là 100.000
+ các bước xử lí: lấy dữ liệu ngày làm việc từ người dùng, tính lương theo ngày làm = lương 1 ngày * số ngày làm
+ output: tính tiền lương nhân viên theo số ngày làm
*/
const ngayCong = 100000;
function duLieuTuNguoiDung() {
    var soNgayLamViec = + document.getElementById("ngayLam").value;

    var hienThiSoLuong = document.getElementById("hienThi");
    hienThiSoLuong.innerHTML = ngayCong * soNgayLamViec;
};
document.getElementById("tongLuong").onclick = duLieuTuNguoiDung;
// Bài 2 : tính giá trị trung bình
// đề bài viết chương trình nhập vào 5 số thực. Tính giá trị trung bình của 5 số này và xuất ra màn hình.
/* Mô hình 3 khối: 
+ Input: cho 5 con số bất kì,tính tổng 5 con số
+ Bước xử lý: giá trị trung bình =  tổng 5 giá trị được nhập vào bất kì / 5
+ Output: kết quả giá trị trung bình
*/
function layGiaTriNhapVao() {
    var soLieuMot = + document.getElementById("soLieu1").value;
    var soLieuHai = + document.getElementById("soLieu2").value;
    var soLieuBa = + document.getElementById("soLieu3").value;
    var soLieuBon = + document.getElementById("soLieu4").value;
    var soLieuNam = + document.getElementById("soLieu5").value;
    var soLieu = soLieuMot + soLieuHai + soLieuBa + soLieuBon + soLieuNam;
    var ketQuaXuatRa = document.getElementById("ketQua");
    ketQuaXuatRa.innerHTML = soLieu / 5;
};
document.getElementById("trungBinh").onclick = layGiaTriNhapVao;
// Bài 3: Quy đổi tiền USD sang tiền Việt
// đề bài viết chương trình quy đổi từ USD sang VND cho người dùng nhập vào số tiền USD. Tính và xuất ra số tiền sau quy đổi VND.
/* Mô hình 3 khối:
+ input: giá USD là 23.500VND
+ các bước xử lí: tạo biến cố định tiền vnd = 23500,Dom tới tiền Usd khách nhập, cho giá trị nhập = số tiền đô * tiền VND
+ output: kết quả đồng USD => VND.
*/
const tienVietNam = 23500;
function layTienUSD() {
    var soTienUSD = + document.getElementById("tienUsd").value;

    var soTienUsdNhapVao = document.getElementById("tienVnd");
    soTienUsdNhapVao.innerHTML = soTienUSD * tienVietNam;
};
document.getElementById("tienVnd").onclick = layTienUSD;
// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Đề bài : Viết chương trình nhập vào 2 chiều dài và chiều rộng của hình chữ nhật. Tính và xuất ra diện tích, chu vi hình chữ nhật đó.
/* Mô hình 3 khối : 
+ input: cho 2 chiều dài và rộng bất kì
+ các bước xử lí: dom tới vị trí ô input của chiều dài và chiều rộng lấy giá trị từ người dùng nhập, ta tính diện tích = dài * rộng, chu vi = (dài + rộng)*2; 
+ Output: diện tích,chu vi của hình chữ nhật
*/

function layDienTichChuVi() {
    var chieuDaiHinh = + document.getElementById("chieuDai").value;
    var chieuRongHinh = + document.getElementById("chieuRong").value;

    var soDienTich = document.getElementById("dienTich",);
    soDienTich.innerHTML = chieuDaiHinh * chieuRongHinh;
    var soChuTich = document.getElementById("chuVi");
    soChuTich.innerHTML = (chieuDaiHinh + chieuRongHinh) * 2;
};
// Bài 5: Tính tổng 2 ký số:
// Đề bài: Viết chương trình nhập vào 1 số có 2 chữ số (VD: 12,44,57),tính tổng 2 ký số của số vừa nhập. VD: 12 => tổng là 1 + 2 = 3, 57 => 5 + 7 = 12.
/* Mô hình 3 khối
+ Input: cho 1 số bất kỳ có 2 chữ số
+ Các bước xử lí: lấy số hàng đơn vị và số hàng chục cộng lại vs nhau
+ Output: kết quả tổng của 2 ký số
*/

function layTongHaiKySo() {
    var kySoDuocNhan = + document.getElementById("kySo").value;
    var kySoHangDonVi = kySoDuocNhan % 10;
    var kySoHangChuc = kySoDuocNhan / 10;

    var soTongSauNhapVao = document.getElementById("ketQuaNhanDuoc");
    soTongSauNhapVao.innerHTML = Math.floor(kySoHangChuc + kySoHangDonVi);
};
