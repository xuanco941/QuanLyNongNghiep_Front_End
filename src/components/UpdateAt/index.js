import './index.css'
import formatDateTime from '../../asset/fomatDateTime'

const UpdateAt = () => {
    const system = [
        {
            systemID: 1,
            address: '192.168.0.1',
            location: 'Hà Nội',
            description: 'Tháng 3 cần bảo hành',
            name: 'Gateway A',
            UpdateAt: "2019-04-11T08:00:05+07:00"

        },
    

    ]

    return (
        <div>
            {system.map((item) => (
                <div className='value' key={item.systemID}>
                    Cập nhật lần cuối lúc : {formatDateTime(item.UpdateAt)}
                </div>
            ))}
        </div>
    );
};
export default UpdateAt;
