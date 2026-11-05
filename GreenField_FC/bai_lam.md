# 

# Bài làm – GreenField FC

# Họ và tên: Hoa Việt Hoàng

# Lớp: CNTT3

# 4.2 Thao tác CLI

# Lệnh đã chạy:

# ```

# ls -Recurse -Force

# mv .\\ghi\_chu\_ban\_giao.txt .\\docs

# mkdir backup

# cp .\\data\\danh\_sach\_cau\_thu.xlsx .\\backup

# rm .\\temp\_002.tmp

# cd .\\logs

# ls

# cd..

# ls -Recurse -Force

# ```

# Kết quả liệt kê toàn bộ dự án (bao gồm file ẩn):

# ```

# &#x20; Directory: C:\\Users\\ADMIN\\Downloads\\Starter\_Kit\_GreenField\_FC\\starter-kit\\GreenField\_FC

# 

# 

# Mode                 LastWriteTime         Length Name

# \----                 -------------         ------ ----

# d-----         11/5/2026   1:44 PM                backup

# d-----         11/5/2026   1:39 PM                data

# d-----         11/5/2026   1:44 PM                docs

# d-----         11/5/2026   1:38 PM                evidence

# d-----         11/5/2026   1:39 PM                logs

# d-----         11/5/2026   1:17 PM                web

# \-a----         11/5/2026   1:17 PM             92 .env

# \-a----         11/5/2026   1:17 PM            701 bai\_lam.md

# \-a----         11/5/2026   1:17 PM          43407 Danh Sach Cau Thu.xlsx.inspect.ndjson

# 

# 

# &#x20;   Directory: C:\\Users\\ADMIN\\Downloads\\Starter\_Kit\_GreenField\_FC\\starter-kit\\GreenField\_FC\\backup

# 

# 

# Mode                 LastWriteTime         Length Name

# \----                 -------------         ------ ----

# \-a----         11/5/2026   1:36 PM          14683 danh\_sach\_cau\_thu.xlsx

# 

# 

# &#x20;   Directory: C:\\Users\\ADMIN\\Downloads\\Starter\_Kit\_GreenField\_FC\\starter-kit\\GreenField\_FC\\data

# 

# 

# Mode                 LastWriteTime         Length Name

# \----                 -------------         ------ ----

# \-a----         11/5/2026   1:36 PM          14683 danh\_sach\_cau\_thu.xlsx

# 

# 

# &#x20;   Directory: C:\\Users\\ADMIN\\Downloads\\Starter\_Kit\_GreenField\_FC\\starter-kit\\GreenField\_FC\\docs

# 

# 

# Mode                 LastWriteTime         Length Name

# \----                 -------------         ------ ----

# \-a----         11/5/2026   1:17 PM            554 ghi\_chu\_ban\_giao.txt

# 

# 

# &#x20;   Directory: C:\\Users\\ADMIN\\Downloads\\Starter\_Kit\_GreenField\_FC\\starter-kit\\GreenField\_FC\\logs

# 

# 

# Mode                 LastWriteTime         Length Name

# \----                 -------------         ------ ----

# \-a----         11/5/2026   1:17 PM            560 access.log

# 

# 

# &#x20;   Directory: C:\\Users\\ADMIN\\Downloads\\Starter\_Kit\_GreenField\_FC\\starter-kit\\GreenField\_FC\\web

# 

# 

# Mode                 LastWriteTime         Length Name

# \----                 -------------         ------ ----

# d-----         11/5/2026   1:17 PM                images

# \-a----         11/5/2026   1:17 PM            750 app.js

# \-a----         11/5/2026   1:17 PM            680 index.html

# \-a----         11/5/2026   1:17 PM            401 style.css

# 

# 

# &#x20;   Directory: C:\\Users\\ADMIN\\Downloads\\Starter\_Kit\_GreenField\_FC\\starter-kit\\GreenField\_FC\\web\\images

# 

# 

# Mode                 LastWriteTime         Length Name

# \----                 -------------         ------ ----

# \-a----         11/5/2026   1:17 PM           2115 greenfield-logo.png

# \-a----         11/5/2026   1:17 PM            413 greenfield-logo.svg

# ```

# 4.3 Lọc log

# a) Lệnh lọc status=500:

# ```

# Get-Content .\\logs\\access.log | Select-String "status=500" >.\\logs\\loi\_500.txt

# Get-Content .\\logs\\loi\_500.txt

# ```

# Hai dòng đầu của loi\_500.txt:

# ```

# 2026-10-28 18:03:25 GET /api/players status=500

# 2026-10-28 18:05:12 GET /api/players status=500

# ```

# b) Lệnh đếm status=404 và kết quả:

# ```

# (Get-Content .\\logs\\access.log | Select-String "status=404").count

# 4

# ```

# 

# 4.4 Script báo cáo

# Lệnh chạy script: ```.\\tong\_hop.ps1```

# Nội dung logs/tong\_hop.txt:

# ```

# === BAO CAO GREENFIELD FC ===

# 

# 2026-10-28 18:03:22 GET /images/logo-sai.png status=404

# 2026-10-28 18:07:44 GET /fixtures status=404

# 2026-10-28 18:13:52 GET /favicon.ico status=404

# 2026-10-28 18:32:18 GET /api/players status=404

# 

# 

# 3

# ```

# 4.6 Kiểm tra website và báo cáo lỗi

# Tab	Tên file/thông báo	Cách khắc phục

# Network		

# Console		

# Context:

# Expected:

# Actual:

# Log:

# Câu tìm kiếm Google:

# Ghi chú Excel

# Công thức/khó khăn đã gặp:

