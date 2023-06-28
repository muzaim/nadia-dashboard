import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { data } from "@/data/data.js";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";

const orders = () => {
	return (
		<div className="bg-gray-50">
			<div className="p-4 flex justify-between">
				<h2>Orders</h2>
				<h2>Welcome Back, Nadia</h2>
			</div>
			<div className="p-4">
				<div className="w-full m-auto p-4 border rounded-lg overflow-y-auto bg-white">
					<div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3 items-center justify-between cursor-pointer">
						<span>Order</span>
						<span className="sm:text-left text-right">Status</span>
						<span className="sm:text-left text-right">Method</span>
						<span className="hidden md:grid">Last Order</span>
						<span className="hidden md:grid">Option</span>
					</div>
					<ul>
						{data.map((order, id) => (
							<li
								key={id}
								className="bg-gray-50 hover:bg-gray-100 my-3 rounded-lg p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3 items-center justify-between cursor-pointer"
							>
								<div className="flex items-center">
									<div className="bg-purple-100 p-3 rounded-lg">
										<FaShoppingBag className="text-purple-800" />
									</div>
									<div className="pl-4">
										<p className=" font-bold">
											${order.total.toLocaleString()}
										</p>
										<p className=" text-gray-600">
											{order.name.first}
										</p>
									</div>
								</div>

								<p className="text-gray-600 sm:text-left text-right">
									<span
										className={
											order.status == "Processing"
												? "bg-green-200 p-2 rounded-lg"
												: order.status == "Completed"
												? "bg-blue-200 p-2 rounded-lg"
												: "bg-yellow-200 p-2 rounded-lg"
										}
									>
										{order.status}
									</span>
								</p>
								<p className="text-right sm:text-left">
									{order.method}
								</p>
								<div className=" md:flex text-right flex justify-between">
									<p className="hidden md:block">
										{order.date}
									</p>
									<BsThreeDotsVertical className="hidden md:block" />
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default orders;
