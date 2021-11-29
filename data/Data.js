function Data() {
    const [rooms, setRooms] = useState([])

    const getHotel = (() => {
        db.collection('cities')
            .onSnapshot((snapshot) => {
                const dis = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRooms(dis);
                console.log(rooms)
            });
    })

    useEffect(() => {
        getHotel();

    }, []);
}
export { rooms }
export default Data;