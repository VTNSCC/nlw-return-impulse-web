import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

// Estado


export function Widget(){
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
              <WidgetForm/>
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6"/>

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
// COMENTÁRIOS DE APRENDIZADOS: 

/* Popover já faz isso, por isso não preciso usar essa função
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility(){
        setIsWidgetOpen(!isWidgetOpen)
    } */

    /* {isWidgetOpen ? <p>Hello World</p> : null} 
    Se o widget estiver aberto printa Hello, Senão não mostra nada: null.
    Só executa a segunda parte da instrução se a primeira for verdadeira.
    {isWidgetOpen && <p>Hello World</p>}
    */