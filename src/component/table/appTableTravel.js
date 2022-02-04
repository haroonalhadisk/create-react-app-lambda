
import { Button, DeleteButton, DisbaledButton,Table } from "./../scssStyles/travel";

const AppTravel = (props) => {
    // console.log (props.todolist)
    function onClickhandle(index) {
        props.onDelete(index)
    }
    function updatePending(title){
        props.updatePending(title)
    }
    return (

        <div>

            <Table>
                < thead>
                    <tr>
                        <th width="320">Places to visit</th>
                        <th>Status</th>
                        <th width="100"> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todolist.map((res, index) => (
                            <tr key={index}>
                                <td>{res.title}</td>
                                <td>{res.status ? <DisbaledButton onClick={() => updatePending(res.title)} type="button">✔ COMPLETED</DisbaledButton> : <Button  onClick={() => updatePending(res.title)} type="button">PENDING</Button>} </td>
                                <td><DeleteButton onClick={() => onClickhandle(index)}>╳</DeleteButton></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default AppTravel