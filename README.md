# Visualizador das configurações do Portal Meu RH

Ferramenta desenvolvida em nodejs para geração de LOG sobre o arquivo appserver.ini verificando as configurações necessárias para o aplicativo MEURH.

Pré-requisitos:
* NodeJS instalado na máquina https://nodejs.org/en/
* Colocar a pasta report-log-meurh no mesmo diretório do APPSERVER.INI

Execução:
* Acessar a pasta report-log-meurh e executar o arquivo START.BAT
* Verificar o arquivo portal-meurh-config.log

Exemplo de log gerado:
```text
  A porta [HTTP]: 8084 deve ser diferente da porta [RESTCONFIG]: 8084
  O usuário do Protheus deve estar preenchido e não ser Admin.

  Encontrado um portal em [localhost:8084/ws127]
  path: C:\TOTVS 12\P1217\P127_GC_EQ\web\ws127
  ENABLE: 1
  ENVIRONMENT: P127_BRA

  Encontrado um portal em [spod2716.sp01.local:8084/T1]
  path: C:\RH_NOVO\web\app\RH
  ENABLE: 1
  ENVIRONMENT: PROD

  Encontrado um portal em [spod2716.sp01.local:8084/T2]
  path: C:\RH_NOVO\web\app\RH
  ENABLE: 1
  ENVIRONMENT: P127_BRA

  Encontrado um rest em [HTTPENV1]
  URL: /restT1
  Prepare: T1
  CORSEnable: 1
  AllowOrigin: *

  Encontrado um rest em [HTTPENV2]
  URL: /restT2
  Prepare: undefined
  CORSEnable: 1
  AllowOrigin: *

````

