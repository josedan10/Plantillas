import React from "react";

export default class Gallery extends React.Component {
	constructor(props) {
		super(props);
	}
    
	render() {
		return (
			<div className="container">
				<div className="title-section flex-center">
					<h1>Cakes & cupcakes</h1>
					<span className="line-decorator" />
				</div>
				<div className="gallery-items-container grid-container">         
				    {this.props.items.map(item => <GalleryItem key={'item-' + item.name} data={item}/>)}
				</div>
			</div>
		);
	}
}

class GalleryItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="card-gallery flex-center">
				<img src={this.props.data.img} alt="gallery-img"/>
				<h2>{this.props.data.name}</h2>
				<p>{this.props.data.text}</p>
				<div className="price flex-between">
					<span>Precio</span><span>{this.props.data.price}</span>
				</div>
			</div>
		);
	}
}
