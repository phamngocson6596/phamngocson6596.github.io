export const danhmuc = [
    "Văn bản công chứng",
    "Phiếu yêu cầu công chứng",
    "Phiếu yêu cầu công chứng ngoài trụ sở",
    "CMND/ Hộ chiếu và Sổ hộ khẩu/ Tạm trú/ Cư trú (BÊN A)",
    "Đăng ký kết hôn/ XNTT hôn nhân/ Khai sinh (BÊN A)",
    "Giấy xác nhận số CMND (BÊN A)",
    "CMND/ Hộ chiếu và Sổ hộ khẩu/ Tạm trú/ Cư trú (BÊN B)",
    "Đăng ký kết hôn/ XNTT hôn nhân/ Khai sinh (BÊN B)",
    "Giấy xác nhận số CMND (BÊN B)",
    "CMND & Hộ khẩu người làm chứng/Phiên dịch (BÊN A)",
    "CMND & Hộ khẩu người làm chứng/Phiên dịch (BÊN B)",
    "Cam kết về tài sản riêng/VBTT về tài sản vợ chồng",
    "Giấy chứng tử",
    "Di chúc/Văn bản khai nhận di sản/Giấy khám sức khỏe",
    "Tường trình quan hệ nhân thân/ Cam kết về nhân thân",
    "Thông báo niêm yết",
    "Hợp đồng ủy quyền/ Giấy ủy quyền",
    "Giấy ĐKKD, giấy phép đầu tư/ QĐ thành lập",
    "Biên bản họp công ty/ Biên bản định giá/ Biên bản",
    "Giấy CNQSD đất, QSH nhà ở & TSK gắn liền với đất",
    "Thông báo/biên lai nộp lệ phí trước bạ",
    "Thông báo cấp số nhà/ Xác nhận tình trạng nhà ở",
    "Giấy phép xây dựng/ Biên bản hoàn công",
    "Bản vẽ sơ đồ, hiện trạng",
    "Đăng ký xe ô tô/ mô tô/ phương tiện thủy/ tàu biển",
    "Giấy phép lái xe/Giấy chứng nhận kiểm định",
    "Sổ tiết kiệm/Chứng nhận tiền gửi",
    "Phiếu thu/ Hóa đơn/ Đối chiếu công nợ",
    "Giấy mời/ Giấy triệu tập/ Phiếu hẹn/ Phiếu nhận hồ sơ",
    "HĐCNQSDĐ/HĐMB/ Tặng cho/ Thế chấp/ HĐ vay/ Cho ở nhờ/ phụ lục hợp đồng/HĐ thuê",
    "HĐ tín dụng",
    "Văn bản đăng ký chữ ký mẫu",
    "HĐ hủy bỏ/ VB chấm dứt hợp đồng/VB giải chấp",
    "Cam đoan/Cam kết/Tường trình/Xác nhận/Đơn các loại",
    "Công văn/TB thụ lý",
    "Kết quả tra cứu ngăn chặn/giao dịch",
    ""
];

export function tinhtong(nodes){
    let sum = 0;
    nodes.forEach(minion=>{
        if (!isNaN(minion.value) && minion.value !== "") {
            sum += Number.parseInt(minion.value, 10);
            }
    });
    const sumbox = document.querySelector(".sum");
    sumbox.textContent = sum;
};

export function timMax(nodes) {
    let maxBig = 0;
    nodes.forEach(node =>{
        if (node.value && node.value !== "") {
            let str = node.value;
            let arr = str.split(/[-;,]/);
            let numArr = arr.map(Number);
            let max = Math.max(...numArr);
            if (max>maxBig){maxBig=max};
        }
    });
    document.querySelector(".largest").textContent = maxBig;
};

export function saveDoc() {
    const list = document.querySelectorAll(".nameofdoc");
    const listArr = [];
    list.forEach(li => {
        listArr.push(li.textContent);
    });
    localStorage.localDanhmuc = JSON.stringify(listArr);
};
