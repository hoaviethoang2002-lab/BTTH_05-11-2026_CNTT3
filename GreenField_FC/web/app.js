// Bản demo được cố ý để lỗi endpoint để luyện Console/Network.
const statusNode = document.querySelector('#status');
const playersNode = document.querySelector('#players');
fetch('/api/playersNode')
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    return response.json();
  })
  .then((players) => {
    playersNode.innerHTML = players.map((player) => `<tr><td>${player.number}</td><td>${player.name}</td><td>${player.position}</td></tr>`).join('');
    statusNode.textContent = '';
  })
  .catch((error) => {
    statusNode.textContent = 'Không thể tải dữ liệu cầu thủ.';
    console.error('Không thể tải danh sách cầu thủ:', error);
  });
