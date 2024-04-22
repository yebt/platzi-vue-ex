# State

## State Machines

```mermaid
flowchart TD;
    A[ ] --> B;
    B[far:fa-lightbulb  Off] --> |Button pressed|C;
    C[fas:fa-lightbulb ON] --> |Button pressed|B;
```

## Patrón FLux

Datos almacenaos de forma agnostica a como se consimen

El **estado** sufre mutaciones por medio de **eventos**

```mermaid
flowchart TD;
    A[Actions] --> B;
    B[State] --> C;
    C[View] --> A;
```

### State

Datos estructurados agnosticos a la vista

### View

Lo relacionado a la muestra del estado o representación visual

### Actions

Eventos que surgen desde la vista y mutan el estado

![flux pattern](assets/flux.png)