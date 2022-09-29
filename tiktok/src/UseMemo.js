import { useRef, useEffect, useState, useMemo } from "react";


const UseMemo = ({ }) => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, { name, price: +price }]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    };

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('re-calculate');
            return result + prod.price;
        }, 0);

        return result;
    }, [products]);

    return (
        <div style={{ padding: '10px 32px' }}>
            <input type="text"
                value={name}
                placeholder='Enter name....'
                onChange={e => setName(e.target.value)}
                ref={nameRef}
            />
            <br />
            <input type="text"
                value={price}
                placeholder='Enter price....'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}> Add </button>
            <br />
            Total: {total}
            <ul>
                {
                    products.map((product, idx) => {
                        return <li key={idx}>
                            {product.name} -
                            {product.price}
                        </li>
                    })
                }
            </ul>
        </div>
    );

};

export default UseMemo;


// dùng useEffect
/*

const UseMemo = ({ }) => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    useEffect(() => {
        setTotal(() => {
            return products.reduce((result, prod) => {
                console.log('re-calculate');
                return result + prod.price;
            }, 0);
        });
        console.log(total);
    }, [products]);


    const handleSubmit = () => {
        setProducts([...products, { name, price: +price }]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    };
    return (
        <div style={{ padding: '10px 32px' }}>
            <input type="text"
                value={name}
                placeholder='Enter name....'
                onChange={e => setName(e.target.value)}
                ref={nameRef}
            />
            <br />
            <input type="text"
                value={price}
                placeholder='Enter price....'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}> Add </button>
            <br />
            Total: {total}
            <ul>
                {
                    products.map((product, idx) => {
                        return <li key={idx}>
                            {product.name} -
                            {product.price}
                        </li>
                    })
                }
            </ul>
        </div>
    );

};

*/


// dùng useMemo
/*
const UseMemo = ({ }) => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, { name, price: +price }]);
        setName('');
        setPrice('');
        nameRef.current.focus();
    };

    // const total = products.reduce((result, prod) => {
    //     console.log('re-calculate');
    //     return result + prod.price;
    // }, 0)
    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('re-calculate');
            return result + prod.price;
        }, 0);

        return result;
    }, [products]);

    return (
        <div style={{ padding: '10px 32px' }}>
            <input type="text"
                value={name}
                placeholder='Enter name....'
                onChange={e => setName(e.target.value)}
                ref={nameRef}
            />
            <br />
            <input type="text"
                value={price}
                placeholder='Enter price....'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}> Add </button>
            <br />
            Total: {total}
            <ul>
                {
                    products.map((product, idx) => {
                        return <li key={idx}>
                            {product.name} -
                            {product.price}
                        </li>
                    })
                }
            </ul>
        </div>
    );

};

*/

// chỉ dùng useState
/*
const UseMemo = ({ }) => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();
    const [total, setTotal] = useState(0);

    const handleSubmit = () => {
        setProducts((prePros => {
            const newPros = [...prePros, { name, price: +price }];

            setTotal(() => {
                const result = newPros.reduce((result, prod) => {
                    console.log('re-calculate');
                    return result + prod.price;
                }, 0);
        
                return result;
            });

            return newPros
        }));
        setName('');
        setPrice('');
        nameRef.current.focus();
    };

    return (
        <div style={{ padding: '10px 32px' }}>
            <input type="text"
                value={name}
                placeholder='Enter name....'
                onChange={e => setName(e.target.value)}
                ref={nameRef}
            />
            <br />
            <input type="text"
                value={price}
                placeholder='Enter price....'
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}> Add </button>
            <br />
            Total: {total}
            <ul>
                {
                    products.map((product, idx) => {
                        return <li key={idx}>
                            {product.name} -
                            {product.price}
                        </li>
                    })
                }
            </ul>
        </div>
    );

};

*/