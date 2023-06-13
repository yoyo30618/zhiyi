<script>
    var leftTabs = new bootstrap.Tab(document.getElementById('left-tabs'));
    var rightTabs = new bootstrap.Tab(document.getElementById('right-tabs'));

    // 初始化頁籤
    leftTabs.show();
    rightTabs.show();

    // 監聽頁籤切換事件
    document.getElementById('left-tabs').addEventListener('shown.bs.tab', function(event) {
        // 左上區塊的頁籤切換處理
    });

    document.getElementById('right-tabs').addEventListener('shown.bs.tab', function(event) {
        // 右側區塊的頁籤切換處理
    });
</script>
