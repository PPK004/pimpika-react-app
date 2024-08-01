import { useState } from "react";

let nextId = 0;

export default function CreateCard() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClickAdd = () => {
        if (name && address && phone && image) {
            setCards([
                ...cards,
                {
                    id: nextId++,
                    name: name,
                    address: address,
                    phone: phone,
                    image: image
                }
            ]);
            setName('');
            setAddress('');
            setPhone('');
            setImage(null);
        } else {
            alert('กรุณากรอกข้อมูลให้ครบ');
        }
    }

    const handleClickView = (card) => {
        setSelectedCard(card);
    }

    const handleCloseModal = () => {
        setSelectedCard(null);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="p-6 bg-pink-50 min-h-screen">
            <h1 className="text-pink-900 font-extrabold text-3xl mb-6">เพิ่มข้อมูลนามบัตร</h1>
            <div className="space-y-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-pink-700 text-sm font-semibold mb-2">ชื่อ-นามสกุล:</label>
                        <input
                            name="cName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-pink-700 text-sm font-semibold mb-2">ที่อยู่:</label>
                        <input
                            name="cAddress"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-pink-700 text-sm font-semibold mb-2">เบอร์โทร:</label>
                        <input
                            name="cPhone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-pink-700 text-sm font-semibold mb-2">รูปภาพ:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="shadow-sm border border-gray-300 rounded-lg w-full py-2 px-3 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>
                </div>
                <button
                    onClick={handleClickAdd}
                    className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out"
                >
                    เพิ่มนามบัตร
                </button>
            </div>

            <div className="mt-8">
                <h2 className="text-pink-900 font-bold text-2xl mb-4">รายการนามบัตร</h2>
                <div className="flex justify-end mb-4">
                    <p className="text-pink-700 text-lg">จำนวน {cards.length} รายการ</p>
                </div>
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID.</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ชื่อ-นามสกุล</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ที่อยู่</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">เบอร์โทร</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">รูปภาพ</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {cards.map((card, index) => (
                            <tr key={card.id} className="hover:bg-gray-50 transition duration-200 ease-in-out">
                                <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{card.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{card.address}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{card.phone}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {card.image && (
                                        <img src={card.image} alt="Card Image" className="w-16 h-16 object-cover rounded-lg shadow-sm" />
                                    )}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    <button
                                        onClick={() => handleClickView(card)}
                                        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-1 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out"
                                    >
                                        ดูรายละเอียด
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedCard && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-pink-900 font-bold text-xl mb-4">รายละเอียดนามบัตร</h2>
                        <p className="text-gray-700 mb-2"><strong>ชื่อ-นามสกุล:</strong> {selectedCard.name}</p>
                        <p className="text-gray-700 mb-2"><strong>ที่อยู่:</strong> {selectedCard.address}</p>
                        <p className="text-gray-700 mb-2"><strong>เบอร์โทร:</strong> {selectedCard.phone}</p>
                        {selectedCard.image && (
                            <div className="mb-4">
                                <img src={selectedCard.image} alt="Card Image" className="w-full h-auto max-w-xs object-cover rounded-lg shadow-sm" />
                            </div>
                        )}
                        <button
                            onClick={handleCloseModal}
                            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300 ease-in-out"
                        >
                            ปิด
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
