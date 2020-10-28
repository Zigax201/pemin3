var text = [{
    "TOKOA": [{
        "NAMA": "OLSHOPBABY",
        "OWNER": "JOKO",
        "PRODUK": [{
                "NAMA_PRODUK": "DIAPERS",
                "STOK": "",
                "HARGA": ""
            },{
                "NAMA_PRODUK": "SUSU",
                "STOK": "",
                "HARGA": ""
            },{
                "NAMA_PRODUK": "BAJUBAYI",
                "STOK": "",
                "HARGA": ""
            }]
        }]
    }]

$.ajax({
  url:"index.php",
  method: "POST",
  data: {data:JSON.stringify(text)},
  // contentType:'application/json',
  success: function(res){
    console.log(res)
  }
})
