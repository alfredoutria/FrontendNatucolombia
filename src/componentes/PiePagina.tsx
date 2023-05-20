import facebook from '../material/facebook.png';
import instagram from '../material/instagram.png';
import youtube from '../material/youtube.png';

function PiePagina() {

    return (
    
            <footer>
                <div className='redesSociales'>
                    <a className='subredesSociales' target='_blank' href="https://www.facebook.com/ParquesNacionalesNaturalesdeColombia"><img className='imagenRedsocial' src={facebook} /></a>
                    <a className='subredesSociales' target='_blank' href="https://www.instagram.com/parquescolombia/"><img className='imagenRedsocial' src={instagram}  /></a>
                    <a className='subredesSociales' target='_blank' href="https://www.youtube.com/user/ParquesNaturales1"><img className='imagenRedsocial' src={youtube} /></a>
                </div>
                <div className='infoPiePagina'>
                    <div>Desarrollado por Alfredo Utria Garcia</div>
                    <div>Desarrollador de Software</div>
                    <div>Colombia</div>
                </div>
            </footer>
      
    )

}

export default PiePagina;