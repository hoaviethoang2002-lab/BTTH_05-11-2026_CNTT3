# Tac gia: Hoa Việt Hoàng
# Ngay tao: 05/11/2026
echo "Dang tao bao cao..."
echo "=== BAO CAO GREENFIELD FC ===" > logs/tong_hop.txt
cat logs/access.log | Select-String "status=404" >> logs/tong_hop.txt
(cat logs/access.log | Select-String "status=500" ).count >> logs/tong_hop.txt