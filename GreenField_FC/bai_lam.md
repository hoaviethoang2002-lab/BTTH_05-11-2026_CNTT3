
Bài làm – GreenField FC
Họ và tên: Hoa Việt Hoàng
Lớp: CNTT3
4.2 Thao tác CLI
Lệnh đã chạy:
```
ls -Recurse -Force
mv .\ghi_chu_ban_giao.txt .\docs
mkdir backup
cp .\data\danh_sach_cau_thu.xlsx .\backup
rm .\temp_002.tmp
cd .\logs
ls
cd..
ls -Recurse -Force
```
Kết quả liệt kê toàn bộ dự án (bao gồm file ẩn):
```
  Directory: C:\Users\ADMIN\Downloads\Starter_Kit_GreenField_FC\starter-kit\GreenField_FC


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         11/5/2026   1:44 PM                backup
d-----         11/5/2026   1:39 PM                data
d-----         11/5/2026   1:44 PM                docs
d-----         11/5/2026   1:38 PM                evidence
d-----         11/5/2026   1:39 PM                logs
d-----         11/5/2026   1:17 PM                web
-a----         11/5/2026   1:17 PM             92 .env
-a----         11/5/2026   1:17 PM            701 bai_lam.md
-a----         11/5/2026   1:17 PM          43407 Danh Sach Cau Thu.xlsx.inspect.ndjson


    Directory: C:\Users\ADMIN\Downloads\Starter_Kit_GreenField_FC\starter-kit\GreenField_FC\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/5/2026   1:36 PM          14683 danh_sach_cau_thu.xlsx


    Directory: C:\Users\ADMIN\Downloads\Starter_Kit_GreenField_FC\starter-kit\GreenField_FC\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/5/2026   1:36 PM          14683 danh_sach_cau_thu.xlsx


    Directory: C:\Users\ADMIN\Downloads\Starter_Kit_GreenField_FC\starter-kit\GreenField_FC\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/5/2026   1:17 PM            554 ghi_chu_ban_giao.txt


    Directory: C:\Users\ADMIN\Downloads\Starter_Kit_GreenField_FC\starter-kit\GreenField_FC\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/5/2026   1:17 PM            560 access.log


    Directory: C:\Users\ADMIN\Downloads\Starter_Kit_GreenField_FC\starter-kit\GreenField_FC\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----         11/5/2026   1:17 PM                images
-a----         11/5/2026   1:17 PM            750 app.js
-a----         11/5/2026   1:17 PM            680 index.html
-a----         11/5/2026   1:17 PM            401 style.css


    Directory: C:\Users\ADMIN\Downloads\Starter_Kit_GreenField_FC\starter-kit\GreenField_FC\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/5/2026   1:17 PM           2115 greenfield-logo.png
-a----         11/5/2026   1:17 PM            413 greenfield-logo.svg
```
4.3 Lọc log
a) Lệnh lọc status=500:
```
Get-Content .\logs\access.log | Select-String "status=500" >.\logs\loi_500.txt
Get-Content .\logs\loi_500.txt
```
Hai dòng đầu của loi_500.txt:
```
2026-10-28 18:03:25 GET /api/players status=500
2026-10-28 18:05:12 GET /api/players status=500
```
b) Lệnh đếm status=404 và kết quả:
```
(Get-Content .\logs\access.log | Select-String "status=404").count
4
```

4.4 Script báo cáo
Lệnh chạy script: ```.\tong_hop.ps1```
Nội dung logs/tong_hop.txt:
```
=== BAO CAO GREENFIELD FC ===

2026-10-28 18:03:22 GET /images/logo-sai.png status=404
2026-10-28 18:07:44 GET /fixtures status=404
2026-10-28 18:13:52 GET /favicon.ico status=404
2026-10-28 18:32:18 GET /api/players status=404


3
```
4.6 Kiểm tra website và báo cáo lỗi
Tab	|Tên file/thông báo	|Cách khắc phục
|---|---|---|
Network		|logo-sai.png|sửa tên file thành greenfield-logo.png
Console		|Failed to fetch| 
Context:Khi mở website `web/index.html` bằng Edge, em phát hiện logo không hiển thị và danh sách cầu thủ không tải được.
Expected:
- Logo GreenField FC hiển thị đúng.
- Danh sách cầu thủ được tải đầy đủ.
Actual:
- Logo không hiển thị trên website.
- Danh sách cầu thủ không được tải.
Log: Access to fetch at 'file:///C:/api/playersNode' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome-experimental-site-token-provider, chrome-extension, chrome-untrusted, data, edge, http, https, isolated-app.
/C:/api/playersNode:1  Failed to load resource: net::ERR_FAILED
app.js:15 Không thể tải danh sách cầu thủ: TypeError: Failed to fetch
    at app.js:4:1
Câu tìm kiếm Google:
Ghi chú Excel
Công thức/khó khăn đã gặp: