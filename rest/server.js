var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'evaluacion',
	});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

	
app.get('/',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to MarketPlace Store DEMO...";
	res.json(data);
});


/**
 * SALESMAN
 **/
app.get('/salesman',function(req,res){
	var data = {
		"error":1,
		"salesman":""
	};
	connection.query("SELECT * from app_salesman",function(err, rows, fields){
		if(rows.length != 0){
			data["error"] = 0;
			data["salesman"] = rows;
			res.json(data);
		}else{
			data["salesman"] = 'No vendedor Found..';
			res.json(data);
		}
	});
});



/**
 * SALESMAN FIND ONE
 **/
app.post('/salesman',function(req,res){
    var id = req.body.id;
    var name = req.body.name;
    var data = {
        "Data":""
    };
    connection.query("SELECT * from app_salesman WHERE idapp_salesman = ? and salesman_name= ? LIMIT 1",[id,name],function(err, rows, fields){
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "No existe el vendedor";
            res.json(data);
        }
    });
});

/**
 * Category
 **/
app.get('/category',function(req,res){
	var data = {
		"error":1,
		"category":""
	};
	
	connection.query("SELECT * from app_category",function(err, rows, fields){
		if(rows.length != 0){
			data["error"] = 0;
			data["category"] = rows;
			res.json(data);
		}else{
			data["category"] = 'No Categoria Found..';
			res.json(data);
		}
	});
});


/**
 * Category FIND ONE
 **/
app.post('/category',function(req,res){
    var id = req.body.id;
    var data = {
        "Data":""
    };
    connection.query("SELECT * from app_category WHERE idapp_category = ? LIMIT 1",[id,name],function(err, rows, fields){
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "No existe la categoria";
            res.json(data);
        }
    });
});


/**
 * Shipper
 **/
app.get('/shipper',function(req,res){
	var data = {
		"error":1,
		"shipper":""
	};
	
	connection.query("SELECT * from app_shipper",function(err, rows, fields){
		if(rows.length != 0){
			data["error"] = 0;
			data["shipper"] = rows;
			res.json(data);
		}else{
			data["shipper"] = 'No compania Found..';
			res.json(data);
		}
	});
});


/**
 * Shipper FIND ONE
 **/
app.post('/shipper',function(req,res){
    var id = req.body.id;
    var data = {
        "Data":""
    };
    connection.query("SELECT * from app_shipper WHERE idapp_shipper = ? LIMIT 1",[id,name],function(err, rows, fields){
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "No existe la compania";
            res.json(data);
        }
    });
});

app.get('/products',function(req,res){
	var data = {
		"error":1,
		"products":""
	};
	
	connection.query("select p.product_name, p.product_exist, p.product_price,  ip.image_path   from app_products p" /
					"inner join app_image_product ip on p.idapp_product=ip.app_products_idapp_product; ",function(err, rows, fields){
		if(rows.length != 0){
			data["error"] = 0;
			data["products"] = rows;
			res.json(data);
		}else{
			data["products"] = 'No products Found..';
			res.json(data);
		}
	});
});

/**
 * products FIND ONE
 **/
app.post('/products',function(req,res){
    var id = req.body.id;
    var data = {
        "Data":""
    };
    connection.query("SELECT * from app_products WHERE idapp_products = ? LIMIT 1",[id,name],function(err, rows, fields){
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "No existe el Producto";
            res.json(data);
        }
    });
});

app.post('/products',function(req,res){
	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;
	var data = {
		"error":1,
		"products":""
	};
	if(!!Bookname && !!Authorname && !!Price){
		connection.query("INSERT INTO products VALUES('',?,?,?)",[Bookname,Authorname,Price],function(err, rows, fields){
			if(!!err){
				data["products"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["products"] = "products Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["products"] = "Please provide all required data (i.e : Bookname, Authorname, Price)";
		res.json(data);
	}
});

app.put('/products',function(req,res){
	var Id = req.body.id;
	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;
	var data = {
		"error":1,
		"products":""
	};
	if(!!Id && !!Bookname && !!Authorname && !!Price){
		connection.query("UPDATE products SET BookName=?, AuthorName=?, Price=? WHERE id=?",[Bookname,Authorname,Price,Id],function(err, rows, fields){
			if(!!err){
				data["products"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["products"] = "Updated Book Successfully";
			}
			res.json(data);
		});
	}else{
		data["products"] = "Please provide all required data (i.e : id, Bookname, Authorname, Price)";
		res.json(data);
	}
});

app.delete('/products',function(req,res){
	var Id = req.body.id;
	var data = {
		"error":1,
		"products":""
	};
	if(!!Id){
		connection.query("DELETE FROM products WHERE id=?",[Id],function(err, rows, fields){
			if(!!err){
				data["products"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["products"] = "Delete Book Successfully";
			}
			res.json(data);
		});
	}else{
		data["products"] = "Please provide all required data (i.e : id )";
		res.json(data);
	}
});



/**
 * ORDER
 **/
app.get('/order',function(req,res){
	var data = {
		"error":1,
		"order":""
	};
	connection.query("SELECT * from app_orders",function(err, rows, fields){
		if(rows.length != 0){
			data["error"] = 0;
			data["order"] = rows;
			res.json(data);
		}else{
			data["order"] = 'No vendedor Found..';
			res.json(data);
		}
	});
});



/**
 * ORDER FIND ONE
 **/
app.post('/order',function(req,res){
    var id = req.body.id;
    var data = {
        "Data":""
    };
    connection.query("SELECT * from app_orders WHERE idapp_order = ? LIMIT 1",[id],function(err, rows, fields){
        if(rows.length != 0){
            data["Data"] = rows;
            res.json(data);
        }else{
            data["Data"] = "No existe la orden";
            res.json(data);
        }
    });
});


http.listen(8080,function(){
	console.log("Connected & Listen to port 8080");
});
