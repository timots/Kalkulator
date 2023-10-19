<script>
    function hitung(params) {
        
    }() {
            var bil2 = parseInt(document.getElementById('angka2').value);
            var operator = document.getElementById('operator').value;

            var hasil;

            switch (operator) {
                case '+':
                    hasil = bil1 + bil2;
                    break;
                case '-':
                    hasil = bil1 - bil2;
                    break;
                case 'x':
                    hasil = bil1 * bil2;
                    break;
                case '/':
                    hasil = bil1 / bil2;
                    break;
            }

            document.getElementById('hasil').value = hasil;
        }
    </script>