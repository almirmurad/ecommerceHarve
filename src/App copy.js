import logo from './logo.svg';
import './App.css';

import { ComponenteNome } from './componentes/componenteNome';
import { ComponenteResumoSobreVoce } from './componentes/ComponenteResumoSobreVoce';
import { ComponenteCompetencia } from './componentes/ComponenteCompetencia';
import { ComponentTemplate } from './componentes/ComponentTemplate';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      {
       
        <ComponentTemplate logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Adidas_logo.png/1024px-Adidas_logo.png" nav="Home | Sobre | Contato | Produtos" info_foot="teste &copy; Todos os direitos reservados">
          <ComponenteNome/>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, nibh vel pellentesque venenatis, mi est maximus neque, sit amet mattis leo mauris et dolor. Aenean vitae ornare ex. Quisque eu dapibus erat. Integer vehicula mauris nibh, eu accumsan enim ultrices ut. Fusce finibus, metus ac auctor rhoncus, diam orci vulputate eros, non placerat metus odio ut quam. Nulla euismod feugiat risus. Praesent vel nunc at nisl volutpat feugiat. Praesent et massa ullamcorper, imperdiet augue scelerisque, dapibus erat. Cras fermentum sed tortor sed feugiat.  
          </p>
          <p>
          Praesent fringilla non sem vitae convallis. Nunc ac nibh vitae augue dignissim faucibus ac vestibulum erat. Sed sodales dui vel tempus aliquet. Aenean et tincidunt eros. Nam convallis pretium neque, in posuere odio convallis ut. Ut pretium leo eget vestibulum congue. Nullam tellus nibh, mattis eget augue et, consectetur consectetur ex. Quisque quis eros turpis. Vestibulum lectus urna, ultrices dictum tincidunt et, varius non urna. Suspendisse sed erat at arcu pretium dictum sed vitae massa. Proin molestie augue nec ligula hendrerit, eget dignissim nisl laoreet. Nunc ligula ex, vestibulum nec interdum quis, sagittis et erat. Donec iaculis ipsum a ex interdum, sit amet mollis urna accumsan. Proin lacus massa, feugiat quis lacinia nec, dictum eget tellus. Pellentesque vestibulum consectetur placerat.
          </p>
          <p>
          Phasellus eu sapien a mi posuere consectetur tincidunt quis lorem. Suspendisse ornare tristique eros, eu venenatis sem lobortis nec. Duis et ipsum tortor. Sed euismod pretium venenatis. Donec dictum ex vel hendrerit iaculis. Nullam gravida arcu eros, at volutpat enim accumsan ut. Aenean scelerisque eget purus at aliquet. Fusce tempus eget mi eget commodo. In ultricies molestie ligula dapibus lobortis. Ut a cursus tellus. Donec in condimentum quam, quis varius purus. Aliquam finibus eros lacus, ut laoreet libero tincidunt quis.
          </p>


          <p>
          Etiam molestie eget nunc nec bibendum. Phasellus at magna sed nunc dapibus laoreet sed eu arcu. Ut eget neque a ipsum lobortis rutrum. Vestibulum elementum finibus elementum. Proin vel eros molestie, pellentesque justo at, porttitor enim. In et turpis quis ligula auctor porta. Donec eget felis enim. Nullam lacinia justo nec turpis laoreet dapibus. Morbi sit amet accumsan tellus. Nulla at fermentum mauris, quis ornare arcu.
          </p>
          <p>
          Integer posuere nulla a metus scelerisque consequat. Aenean viverra porttitor fringilla. Suspendisse ullamcorper maximus aliquam. Nulla at magna ac justo feugiat fringilla. Pellentesque id lorem tortor. Maecenas massa dui, mattis vel justo ac, accumsan blandit velit. Pellentesque tincidunt libero in urna pulvinar, eget commodo elit iaculis. Nulla tempus pharetra mi, in posuere lacus tincidunt placerat. Cras efficitur purus sit amet libero volutpat, non hendrerit ligula elementum. Suspendisse in malesuada leo, sed bibendum lorem. Quisque feugiat fermentum lacus, ut efficitur ipsum bibendum a.
          </p>


        </ComponentTemplate>
        
      
      }
      
      
    </div>


  );
}

export default App;
