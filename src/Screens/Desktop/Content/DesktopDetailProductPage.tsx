import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Rate, Form, Input, Modal, message } from 'antd';
import { ShoppingCartOutlined, SendOutlined, TagFilled } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { getSeperateProduct } from '../../../api/getSeperateProduct';
import { storeData } from '../../../localStorage/storeData';
import { getData } from '../../../localStorage/getData';
import DesktopFooter from '../Components/DesktopFooter';
import DesktopNavbar from '../Components/DesktopNavbar';
import DesktopProductDecription from '../Components/DesktopProductDescription';
import Desktop404 from '../Components/Desktop404';
import Loading from '../Components/Loading';
import './css/DesktopDetailsProductPageStyle.css';

export const DesktopDetailProductPage = (props) => {
    const { productId } = useParams<{productId: any}>();
    const [loading, setLoading] = useState<Boolean>(false);
    const [product, setProduct] = useState<any>();

    const getFullProductDetails = async (productId) => {
        try {
            setLoading(true);
            const response = await getSeperateProduct({id: productId});

            if(response === -1) {
                setProduct(null);
            } else {
                setProduct(response);
            }
            setLoading(false);
        } catch(error) {
            setProduct(null);
        }
    }

    useEffect(() => {
        getFullProductDetails(productId);
    }, [productId]);

    const checkPinNumber = (values) => {
        console.log('Success', values);
    }

    const onFinishFailed = (values) => {
        Modal.error({
            title: 'Error',
            content: 'Internal Server Error, Please try again after sometimes...'
        });
    }

    const calculateOff = (mrp, price) => {
        return Math.round(((mrp - price) / mrp) * 100);
    }

    const addItemToCart = async (productInfo) => {
        try{
            // const previousCartResponse = await getData('cart');
            // const previousCart = [];
            // if(previousCartResponse.length) {
            //     previousCart.push(previousCartResponse);
            // }
            // previousCart.push({
            //     imageUrl: productInfo.url,
            //     name: productInfo.name,
            //     category: productInfo.category
            // });
            // await storeData('cart', previousCart);
            message.success('Product Added to Cart');
        } catch(error) {
            console.log('DesktopDetailProductPage Error', error);
            Modal.error({
                title: 'Error',
                content: 'Internal Server Error, Please try again after sometimes...'
            });
        }
    }

    return(
        <div style={{width: '100%'}}>
            <DesktopNavbar />
            {loading ? 
                <Loading title='Searching...' /> 
            : null}
            {product ?
            <div className="desktopSeperateProduct">
                <Row>
                    <Col span={10}>
                        <div>
                            <img 
                                className="desktopProductImage" 
                                alt={product.name} 
                                src={product.url} 
                            />

                            {(product.countInStock > 0) ? (
                                <div className="DesktopBuyBtn">
                                    <Button 
                                        className="btn addToCartBtn"
                                        onClick={() => addItemToCart(product)}
                                        >
                                        <ShoppingCartOutlined /> Add to Cart
                                    </Button>
                                    <Button className="btn buyNow">
                                        <SendOutlined />Buy Now
                                    </Button>
                                </div>
                            ) : (
                                <div className="DesktopBuyBtn">
                                    <Button className="outOfStock">
                                        Out Of Stock
                                    </Button>
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col span={14}>
                        <div className="desktopProductContent">
                            <h3>{product.name}</h3>
                            <span className="rating">
                                {product.rating ? (
                                    <React.Fragment>
                                        <Rate allowHalf disabled defaultValue={4.5} />
                                        <span>&nbsp; (4.5★) &nbsp;</span>
                                        <span>&nbsp;1000 Ratings</span>
                                    </React.Fragment>
                                ) : (
                                    <span className="desktopNoRatingText">No Rating Found</span>
                                )}
                            </span>
                            <p className="price">
                                <span className="mainPrice">&#8377; {20999}</span>
                                {Number(product.price) !== Number(product.mrp) ? (
                                    <React.Fragment>
                                        <span>&nbsp; <del>&#8377; {20999}</del>&nbsp;</span>
                                        <span> ({calculateOff(Number(product.mrp), Number(product.price))}% OFF) </span>
                                    </React.Fragment>
                                ) : null }
                            </p>
                            <div className="desktopAvailableOffer">
                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>

                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>

                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>
                                <p>
                                    <span><TagFilled /></span>
                                    <span className="bankoffer">Bank Offer</span>
                                    5% Unlimited Cashback on Flipkart Axis Bank Credit Card
                                </p>
                                
                            </div>

                            <Form
                                className="checkDeliveryPinCode"
                                onFinish={checkPinNumber}
                                onFinishFailed={onFinishFailed}
                                >
                                <Form.Item name='pinCode'>
                                    <Input
                                        type='number'
                                        placeholder='Enter Delivery Pincode'
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                            
                            <DesktopProductDecription
                                heading='Highlights'
                                text={product.highlights}
                            />

                            <DesktopProductDecription
                                heading='Description'
                                text={product.description}
                            />

                            <DesktopProductDecription
                                heading='Specifications'
                                text={product.specifications}
                            />

                            <DesktopProductDecription
                                heading='Warranty'
                                text={product.warranty ? product.warranty : 'No Warrenty'}
                            />

                            <DesktopProductDecription
                                heading='Origin'
                                text={product.origin}
                            />

                            <DesktopProductDecription
                                heading='Manufacturer'
                                text={product.manufacturer}
                            />
                                
                            <p>&nbsp;</p>
                        </div>
                    </Col>
                </Row>
            </div>
            :
            <Desktop404 />
            }
            <DesktopFooter />
        </div>
    );
}