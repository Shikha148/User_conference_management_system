import axios from "axios";
import { useState } from "react";
import "./Pay.css";


function Pay() {
	const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});

	const initPayment = (data) => {
		const options = {
			key: "rzp_test_qejEqMUuiY2gm2",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:5000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try{
			const book = "http://localhost:5000/book/email/event/shikha@gmail.com/633c350c2b6178b0b6fabd50";
			let val= await axios.get(book);
		val=val.data.toString();
		if((Number(val)===0))
		{
		try {
			const orderUrl = "http://localhost:5000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: 90 });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
		}
		else
		{
			alert(val);
			return false;
		}
	}
		catch(error){
			console.log(error);
		}
	};

	return (
		<div className="App">
			<div className="book_container">
				<img src={book.img} alt="book_img" className="book_img" />
				<p className="book_name">{book.name}</p>
				<p className="book_author">By {book.author}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {book.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div>
	);
}

export default Pay;