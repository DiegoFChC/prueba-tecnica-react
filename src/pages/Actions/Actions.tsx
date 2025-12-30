import { Button } from '../../components/Button/Button'
import { useAppContext } from '../../context/AppContext'
import { useAction } from '../../hooks/useActions'
import { parseDate } from '../../utils/parseDate'
import { CreateActionForm } from '../CreateActionForm/CreateActionForm'
import './Actions.css'

export function Actions() {
  const { openModal } = useAppContext()
  const {
    data,
    filters: { pageNumber, pageSize },
    updateFilters,
    createNewAction
  } = useAction()

  return (
    <main className='actions'>
      <h1>Acciones</h1>
      <div className='newAction'>
        <Button
          type='button'
          handleClick={() => {
            openModal(<CreateActionForm handleCreateAction={createNewAction} />)
          }}
        >
          Crear tipo de acción
        </Button>
      </div>
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <td>Imagen de la acción</td>
              <td>Nombre de la acción</td>
              <td>Color de la acción</td>
              <td>Estado de la acción</td>
              <td>Descripción de la acción</td>
              <td>Fecha de creación de la acción</td>
            </tr>
          </thead>
          <tbody>
            {!data || data.data.length === 0 ? (
              <tr>
                <td>Actualmente no hay acciones para listar.</td>
              </tr>
            ) : (
              data.data.map((action) => {
                const {
                  id,
                  name,
                  description,
                  icon,
                  color,
                  status,
                  createdAt,
                } = action
                return (
                  <tr key={id}>
                    <td className='center'>
                      <img src={icon} alt='action image' />
                    </td>
                    <td>{name}</td>
                    <td className='center'>
                      <span
                        className='color'
                        style={{ background: color }}
                      ></span>
                    </td>
                    <td className='center'>
                      <span className={`status ${status ? 'green' : 'red'}`}>
                        {status ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>
                    <td>{description}</td>
                    <td className='center'>{parseDate(createdAt)}</td>
                  </tr>
                )
              })
            )}
          </tbody>
          <tfoot>
            <tr>
              {data && data.data.length > 0 && (
                <td colSpan={6} className='center'>
                  <div className='pagination'>
                    <span className='selectSize'>
                      Resultados por página
                      <select
                        id='pageSize'
                        onChange={(e) =>
                          updateFilters(pageNumber, Number(e.target.value))
                        }
                        value={pageSize}
                      >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                      </select>
                    </span>
                    <span>
                      {data.pageNumber * data.pageSize + 1}-
                      {(data.pageNumber + 1) * data.pageSize} de{' '}
                      {data.totalElements}
                    </span>
                    <span className='navigation'>
                      <button
                        onClick={() => updateFilters(pageNumber - 1, pageSize)}
                        disabled={data.pageNumber < 1}
                      >{`<`}</button>
                      <button
                        onClick={() => updateFilters(pageNumber + 1, pageSize)}
                        disabled={
                          (data.pageNumber + 1) * data.pageSize >
                          data.totalElements
                        }
                      >{`>`}</button>
                    </span>
                  </div>
                </td>
              )}
            </tr>
          </tfoot>
        </table>
      </div>
    </main>
  )
}
