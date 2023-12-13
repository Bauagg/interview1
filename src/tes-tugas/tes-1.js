import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TageTugas1 = () => {
    const [dataState, setDataState] = useState(77777)
    const [displayedData, setDisplayedData] = useState('');
    const [nameString, setnameString] = useState('')
    const [namePushArray, setNamePushArray] = useState('')
    const [indexArray, setIndexArray] = useState(0)
    const [array, setArray] = useState([])

    /**
    Tampilkan nilai variabel tadi pada browser dengan format
    separator ribuan menggunakan koma. misal 123,456
     */
    const handleButtonClick = () => {
        const formattedData = dataState.toLocaleString();
        setDisplayedData(formattedData);
    };

    const formattedData = dataState.toLocaleString();

    /*
    Ubah nilai variabel tersebut dengan nilai: isi variabel sebelumnya
    digabung dengan string "CrossTechno Developer"
    Tampilkan nilai variabel tadi pada browser
     */
    let name = 'A. Mambaus Sholihin '
    if (nameString !== '') {
        name = name + nameString
    }

    /* 
    Ganti setiap huruf "o" (besar maupun kecil) mejadi huruf "A"
    Tampilkan nilai variabel tadi pada browser
     */
    const newName = name.replace(/o/gi, 'A');

    const hendleUpdateArray = () => {
        const updatedArray = [...array];

        if (indexArray >= 0 && indexArray < updatedArray.length) {
            updatedArray[indexArray] = namePushArray;
            setArray(updatedArray);
        } else {
            alert('Indeks di luar batas array');
        }
    }

    return (
        <div className='container'>
            <h1 className='mt-5'>test 1</h1>
            <div>
                <h5>Soal no 2</h5>
                <div className="input-group mb-3">
                    <input onChange={(e) => setDataState(parseFloat(e.target.value))} type="number" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleButtonClick}>Button</button>
                </div>

                <p>data test : {!displayedData ? formattedData : displayedData}</p>

                <h5>Soal no 3</h5>
                <div className="input-group mb-3">
                    <input onChange={(e) => setnameString(e.target.value)} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                </div>

                <p>Name : {newName}</p>

                <h5>Soal no 4</h5>
                <label className='d-block'>update Array</label>
                <div className="input-group mb-3">
                    <input onChange={(e) => setIndexArray(e.target.value)} type="number" className="form-control" placeholder="Index Array" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <input onChange={(e) => setNamePushArray(e.target.value)} type="text" className="form-control" placeholder="Array" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={hendleUpdateArray}>Button</button>
                </div>

                <label className='d-block'>Isi nilai Array</label>
                <div className="input-group mb-3">
                    <input onChange={(e) => setNamePushArray(e.target.value)} type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => setArray((pushArray) => [...pushArray, namePushArray])}>Button</button>
                </div>
                <ul>
                    {
                        array.map((index) => {
                            return (
                                <li key={index}>{index}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default TageTugas1