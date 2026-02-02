
import { ExampleCode } from './types';

export const PYTHON_EXAMPLES: ExampleCode[] = [
  {
    title: "Chào hỏi",
    code: "print('Chào em! Thầy Kha khó tính nhưng em là number one đây!') # In lời chào ra màn hình",
    description: "Lệnh in cơ bản để xuất lời chào."
  },
  {
    title: "Vòng lặp For",
    code: "for i in range(5): # Lặp 5 lần, biến i chạy từ 0 đến 4\n    print(f'Số thứ tự: {i+1}') # In ra số thứ tự (tăng i thêm 1 để bắt đầu từ 1)",
    description: "Sử dụng vòng lặp for để in dãy số."
  },
  {
    title: "Kiểm tra điều kiện",
    code: "diem = 10 # Tạo biến diem và gán giá trị là 10\nif diem >= 8: # Kiểm tra nếu điểm lớn hơn hoặc bằng 8\n    print('Bạn đạt loại Giỏi! Xuất sắc!') # Nếu đúng thì in dòng này\nelse: # Nếu sai (điểm nhỏ hơn 8)\n    print('Cố gắng thêm chút nữa nhé!') # Thì in dòng này",
    description: "Dùng câu lệnh if-else để kiểm tra điều kiện."
  },
  {
    title: "Vòng lặp While",
    code: "dem = 1 # Bắt đầu đếm từ 1\nwhile dem <= 5: # Khi biến dem còn nhỏ hơn hoặc bằng 5 thì tiếp tục lặp\n    print(f'Thầy Kha đếm: {dem}') # In số đang đếm hiện tại\n    dem += 1 # Tăng biến dem lên 1 đơn vị để không bị lặp vô tận\nprint('Hết rồi em ơi!') # Thông báo khi kết thúc vòng lặp",
    description: "Sử dụng vòng lặp while để đếm số cho đến khi điều kiện không còn đúng."
  },
  {
    title: "Xây dựng Hàm (Function)",
    code: "def chao_hoc_sinh(ten): # Định nghĩa hàm tên là chao_hoc_sinh nhận vào biến ten\n    return f'Chào mừng {ten} đến với lớp của thầy Kha!' # Trả về chuỗi lời chào\n\nten_em = 'Linh' # Tạo biến lưu tên học sinh\nthong_bao = chao_hoc_sinh(ten_em) # Gọi hàm và lưu kết quả vào biến thong_bao\nprint(thong_bao) # In kết quả cuối cùng ra màn hình",
    description: "Cách tạo và gọi một hàm (function) trong Python."
  },
  {
    title: "Làm việc với Danh sách (List)",
    code: "trai_cay = ['Táo', 'Chuối', 'Cam'] # Tạo danh sách các loại trái cây\ntrai_cay.append('Xoài') # Thêm 'Xoài' vào cuối danh sách\nfor x in trai_cay: # Duyệt qua từng loại quả trong danh sách\n    print(f'Thầy thích ăn: {x}') # In ra từng loại quả",
    description: "Cách tạo danh sách, thêm phần tử và duyệt qua danh sách."
  },
  {
    title: "Nhập liệu (Input)",
    code: "ten = input('Em tên là gì? ') # Yêu cầu người dùng nhập tên\ntuoi = int(input('Em bao nhiêu tuổi rồi? ')) # Nhập tuổi và chuyển sang kiểu số nguyên (int)\nprint(f'Chào {ten}, {tuoi} tuổi là lứa tuổi đẹp nhất để học Python đó!') # In lời nhắn",
    description: "Sử dụng lệnh input() để tương tác với người dùng."
  },
  {
    title: "Từ điển (Dictionary)",
    code: "hoc_sinh = { # Tạo từ điển lưu thông tin\n    'ten': 'Minh', # Khóa 'ten' có giá trị 'Minh'\n    'lop': '6A', # Khóa 'lop' có giá trị '6A'\n    'diem': 9.5 # Khóa 'diem' có giá trị 9.5\n}\nprint(f\"Bạn {hoc_sinh['ten']} học lớp {hoc_sinh['lop']} đạt {hoc_sinh['diem']} điểm.\") # Truy xuất dữ liệu theo khóa",
    description: "Lưu trữ thông tin theo cặp khóa (key) và giá trị (value)."
  },
  {
    title: "Làm việc với kiểu file",
    code: "# Mở file để ghi (chế độ 'w' - write)\nwith open('thay_kha.txt', 'w', encoding='utf-8') as f:\n    f.write('Học Python cùng Thầy Kha thật là vui!')\n\n# Mở file để đọc (chế độ 'r' - read)\nwith open('thay_kha.txt', 'r', encoding='utf-8') as f:\n    noi_dung = f.read()\n    print('Thầy đọc được từ file nè:', noi_dung)",
    description: "Hướng dẫn cách ghi và đọc dữ liệu từ tập tin văn bản."
  }
];
