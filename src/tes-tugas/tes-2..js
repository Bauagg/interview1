import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const TageTugas2 = () => {
    const [name, setName] = useState('')
    const [alamat, setAlamat] = useState('')
    const [noTelepon, setNoTelepo] = useState('')
    const [gender, setGetnder] = useState('')
    const [errorname, setErrorName] = useState('')
    const [errorAlamat, setErrorAlamat] = useState('')
    const [errorNoTelepon, setErrorNoTelepon] = useState('')
    const [errorGender, setErrorGender] = useState('')
    const [datas, setdatas] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(resoult => {
                const datasResoult = resoult.data.filter((index) => index.id < 30)
                setdatas(datasResoult)
            })
            .catch(error => console.log(error))
    }, [])

    const hendleFormInput = (e) => {
        e.preventDefault();

        if (!name) {
            return setErrorName('Name Harus di isi')
        }

        if (!alamat) {
            return setErrorAlamat('Alamat Harus di isi')
        }

        const regexNoTelepon = /\+62\s\d{3}[-\.\s]??\d{3}[-\.\s]??\d{3,4}|\(0\d{2,3}\)\s?\d+|0\d{2,3}\s?\d{6,7}|\+62\s?361\s?\d+|\+62\d+|\+62\s?(?:\d{3,}-)*\d{3,5}/
        if (!regexNoTelepon.test(noTelepon)) {
            setErrorNoTelepon('No Telepon tidak valid!');
        }

        if (gender === 'Choose...' || !gender) {
            return setErrorGender('Gender harus di isi yang valid')
        }

        alert(
            `
            name : ${name}
            alamat : ${alamat}
            no Telepon : ${noTelepon}
            gender : ${gender}
            `
        )
    }

    return (
        <div className='container'>
            <h1 className='mt-5'>test 2</h1>
            <div>
                <h5>tugas 2</h5>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`form-control  ${errorname ? 'is-invalid' : ''}`} id="name" placeholder="name@example.com" required />
                    <div className="invalid-feedback">
                        {errorname && <p>{errorname}</p>}
                    </div>
                </div>
                <div className="mb-3">
                    <label for="alamat" className="form-label">Alamat</label>
                    <input type="text" value={alamat} onChange={(e) => setAlamat(e.target.value)} className={`form-control  ${errorAlamat ? 'is-invalid' : ''}`} id="alamat" placeholder="name@example.com" />
                    <div className="invalid-feedback">
                        {errorAlamat && <p>{errorAlamat}</p>}
                    </div>
                </div>
                <div className="mb-3">
                    <label for="noTelepon" className="form-label">No Telepon</label>
                    <input type="number" value={noTelepon} onChange={(e) => setNoTelepo(e.target.value)} className={`form-control  ${errorNoTelepon ? 'is-invalid' : ''}`} id="noTelepon" placeholder="name@example.com" />
                    <div className="invalid-feedback">
                        {errorNoTelepon && <p>{errorNoTelepon}</p>}
                    </div>
                </div>
                <div className="input-group mb-3">
                    <label for="inputGroupSelect01" className="form-label">Jenis Kelamin</label>
                    <select onChange={(e) => setGetnder(e.target.value)} className={`custom-select w-100 ${errorGender ? 'is-invalid' : ''}`} id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="Perempuan">Perempuan</option>
                        <option value="Pria">Pria</option>
                    </select>
                    <div className="invalid-feedback">
                        {errorGender && <p>{errorGender}</p>}
                    </div>
                </div>
                <button onClick={hendleFormInput} type="button" className="w-100 btn btn-primary">Submit</button>
            </div>
            <h5 className='mt-5'>Tugas 6</h5>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>postId</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((index) => {
                            return (
                                <tr key={index.id}>
                                    <td>{index.id}</td>
                                    <td>{index.postId}</td>
                                    <td>{index.name}</td>
                                    <td>{index.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TageTugas2