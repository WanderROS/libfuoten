<?xml version="1.0" ?><!DOCTYPE TS><TS language="sv" sourcelanguage="en" version="2.1">
<context>
    <name/>
    <message id="err-conn-timeout" numerus="yes">
        <location filename="../Fuoten/API/component.cpp" line="+372"/>
        <source>The connection to the server timed out after %n second(s).</source>
        <translation><numerusform>Serveranslutningen överskred tidsgränsen efter %n sekund</numerusform><numerusform>Serveranslutningen överskred tidsgränsen efter %n sekunder</numerusform></translation>
    </message>
    <message id="err-username-pass-missing">
        <location line="+26"/>
        <source>You have to specify a username and a password.</source>
        <translation>Du måste ange användarnamn och lösenord.</translation>
    </message>
    <message id="err-no-payloud">
        <location line="+7"/>
        <source>Empty payload when trying to perform a PUT or POST network operation.</source>
        <translation>Tom nyttolast vid försök att utföra en PUT eller POST nätverksoperation.</translation>
    </message>
    <message id="err-empty-answer">
        <location line="+25"/>
        <source>The request replied an empty answer, but there was content expected.</source>
        <translation>Begöran fick ett tomt svar i retur, fast innehåll förväntades.</translation>
    </message>
    <message id="err-no-json-array">
        <location line="+7"/>
        <source>It was expected that the request returns a JSON array, but it returned something else.</source>
        <translation>En JSON-matris förväntades som svar på begäran, men något annat returnerades.</translation>
    </message>
    <message id="err-no-json-object">
        <location line="+7"/>
        <source>It was expected that the request returns a JSON object, but it returned something else.</source>
        <translation>En JSON-objekt förväntades som svar på begäran, men något annat returnerades.</translation>
    </message>
    <message id="err-net-reply-1">
        <location filename="../Fuoten/error.cpp" line="+211"/>
        <source>The remote server at %1 refused the connection.</source>
        <translation>Fjärrservern på %1 nekade anslutning.</translation>
    </message>
    <message id="err-net-reply-2">
        <location line="+4"/>
        <source>The remote server at %1 closed the connection prematurely, before the entire reply was received and processed.</source>
        <translation>Fjärrservern på %1 stängde anslutningen i förtid, innan hela svaret hade mottagits och bearbetats.</translation>
    </message>
    <message id="err-net-reply-3">
        <location line="+4"/>
        <source>The remote host name %1 was not found.</source>
        <translation>Fjärrvärden %1 kunde inte hittas.</translation>
    </message>
    <message id="err-net-reply-4">
        <location line="+4"/>
        <source>The connection to the server at %1 timed out.</source>
        <translation>Anslutningen till %1, överskred tidsgränsen.</translation>
    </message>
    <message id="err-net-reply-5">
        <location line="+4"/>
        <source>The operation was canceled before it was finished.</source>
        <translation>Åtgärden avbröts innan den blev slutförd.</translation>
    </message>
    <message id="err-net-reply-6">
        <location line="+4"/>
        <source>The SSL/TLS handshake failed and the encrypted channel could not be established.</source>
        <translation>SSL-/TLS-handskakning misslyckades och en krypterad kanal kunde inte etableras.</translation>
    </message>
    <message id="err-net-reply-7">
        <location line="+4"/>
        <source>The connection was broken due to disconnection from the network.</source>
        <translation>Anslutningen bröts på grund av bortkoppling från nätverket.</translation>
    </message>
    <message id="err-net-reply-8">
        <location line="+4"/>
        <source>The connection was broken due to disconnection from the network or failure to start the network.</source>
        <translation>Anslutningen bröts på grund av bortkoppling från nätverket eller problem med att starta nätverket.</translation>
    </message>
    <message id="err-net-reply-9">
        <location line="+4"/>
        <source>The background request is not currently allowed due to platform policy.</source>
        <translation>Bakgrundsbegäran är för närvarande inte tillåtet, på grund av plattformspolicy.</translation>
    </message>
    <message id="err-net-reply-10">
        <location line="+4"/>
        <source>While following redirects, the maximum limit was reached.</source>
        <translation>Maxgränsen för omdirigeringar överstegs.</translation>
    </message>
    <message id="err-net-reply-11">
        <location line="+4"/>
        <source>While following redirects, the network access API detected a redirect from an encrypted protocol (https) to an unencrypted one (http).</source>
        <translation>Under pågående omdirigering identifierade nätverkets åtkomst-API en omdirigering från ett krypterat protokoll (https), till ett okrypterat (http).</translation>
    </message>
    <message id="err-net-reply-101">
        <location line="+4"/>
        <source>The connection to the proxy server was refused (the proxy server is not accepting requests).</source>
        <translation>Ansluting till proxyservern nekades (servern accepterar inte begäran).</translation>
    </message>
    <message id="err-net-reply-102">
        <location line="+4"/>
        <source>The proxy server closed the connection prematurely, before the entire reply was received and processed.</source>
        <translation>Proxyservern stängde anslutningen i förtid, innan hela svaret hade mottagits och bearbetats.</translation>
    </message>
    <message id="err-net-reply-103">
        <location line="+4"/>
        <source>The proxy host name was not found (invalid proxy hostname).</source>
        <translation>Proxyn kunde inte hittas (ogiltigt proxyvärdnamn).</translation>
    </message>
    <message id="err-net-reply-104">
        <location line="+4"/>
        <source>The connection to the proxy timed out or the proxy did not reply in time to the request sent</source>
        <translation>Anslutningen till proxyn överskred tidsgränsen, ellerproxyn svarade inte på begäran i tid.</translation>
    </message>
    <message id="err-net-reply-105">
        <location line="+4"/>
        <source>The proxy requires authentication in order to honour the request but did not accept any credentials offered (if any).</source>
        <translation>Proxyn kräver autentisering för att kunna svara på begäran, men accepterade inte inloggningsuppgifterna som skickades (om några).</translation>
    </message>
    <message id="err-net-reply-201">
        <location line="+4"/>
        <source>The access to the remote content was denied.</source>
        <translation>Åtkomst till fjärrinnehållet nekades.</translation>
    </message>
    <message id="err-net-reply-202">
        <location line="+4"/>
        <source>The operation requested on the remote content is not permitted.</source>
        <translation>Den begärda åtgärden på fjärrinnehållet, är inte tillåten.</translation>
    </message>
    <message id="err-net-reply-203">
        <location line="+4"/>
        <source>The remote content was not found at the server.</source>
        <translation>Fjärrinnehållet kunde inte hittas på servern.</translation>
    </message>
    <message id="err-net-reply-204">
        <location line="+4"/>
        <source>The remote server requires authentication to serve the content but the credentials provided were not accepted (if any).</source>
        <translation>Fjärrservern kräver autentisering för att returnera innehållet, men accepterade inte inloggningsuppgifterna som skickades (om några).</translation>
    </message>
    <message id="err-net-reply-205">
        <location line="+4"/>
        <source>The request needed to be sent again, but this failed for example because the upload data could not be read a second time.</source>
        <translation>Begäran behövde skickas igen, men detta misslyckades, möjligen på grund av att data inte kunde läsas en andra gång. </translation>
    </message>
    <message id="err-net-reply-206">
        <location line="+4"/>
        <source>The request could not be completed due to a conflict with the current state of the resource.</source>
        <translation>Begäran kunde inte slutföras, på grund av konflikt med aktuell status för resursen.</translation>
    </message>
    <message id="err-net-reply-207">
        <location line="+4"/>
        <source>The requested resource is no longer available at the server.</source>
        <translation>Den begärda resursen finns inte längre tillgänglig på servern.</translation>
    </message>
    <message id="err-net-reply-401">
        <location line="+4"/>
        <source>The server encountered an unexpected condition which prevented it from fulfilling the request.</source>
        <translation>Servern drabbades av ett oväntat tillstånd som hindrade den från att uppfylla begäran.</translation>
    </message>
    <message id="err-net-reply-402">
        <location line="+5"/>
        <source>The server does not support the functionality required to fulfill the request.</source>
        <translation>Servern stödjer inte den funktion som krävs för att uppfylla begäran.</translation>
    </message>
    <message id="err-net-reply-403">
        <location line="+5"/>
        <source>The server is unable to handle the request at this time.</source>
        <translation>Servern kan inte hantera begäran för tillfället.</translation>
    </message>
    <message id="err-net-reply-301">
        <location line="+4"/>
        <source>The Network Access API cannot honor the request because the protocol is not known.</source>
        <translation>Nätverkets åtkomst-API kan inte bistå begäran eftersom protokollet är okänt.</translation>
    </message>
    <message id="err-net-reply-302">
        <location line="+4"/>
        <source>The requested operation is invalid for this protocol.</source>
        <translation>Den begärda åtgärden är ogiltig för detta protokoll.</translation>
    </message>
    <message id="err-net-reply-99">
        <location line="-119"/>
        <location line="+123"/>
        <source>An unknown network-related error was detected.</source>
        <translation>Ett okänt nätverksrelaterat fel har identifierats.</translation>
    </message>
    <message id="libfuoten-err-http-400">
        <location line="-254"/>
        <source>Bad request — The server cannot or will not process the request due to an apparent client error.</source>
        <translation>Felaktig begäran — Servern kan inte, eller kommer inte att behandla begäran på grund av ett uppenbart klientfel.</translation>
    </message>
    <message id="libfuoten-err-http-401">
        <location line="+4"/>
        <source>Unauthorized — You need to provide authentication credentials to perform the request.</source>
        <translation>Obehörig — Du måste ange autentiseringsuppgifter för att utföra begäran.</translation>
    </message>
    <message id="libfuoten-err-http-403">
        <location line="+5"/>
        <source>Fobidden — You might not have the necessary permissions to perform this action.</source>
        <translation>Förbjudet — Du kanske inte har nödvändig behörighet att utföra den här åtgärden.</translation>
    </message>
    <message id="libfuoten-err-http-404">
        <location line="+5"/>
        <source>Not found — The requested resource can not be found on the server.</source>
        <translation>Hittade inte — Den begärda resursen kan inte hittas på servern.</translation>
    </message>
    <message id="libfuoten-err-http-405">
        <location line="+4"/>
        <source>Method not allowed — The used method is not allowed for the requested resource.</source>
        <translation>Metoden tillåts inte — Den använda metoden tillåts inte för den begärda resursen.</translation>
    </message>
    <message id="libfuoten-err-http-406">
        <location line="+4"/>
        <source>Not Acceptable — The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.</source>
        <translation>Accepteras inte — Den begärda resursen kan endast generera innehåll som inte accepteras enligt accept-rubrikerna i begäran.</translation>
    </message>
    <message id="libfuoten-err-http-407">
        <location line="+4"/>
        <source>Proxy authentication required — The client must first authenticate itself with the proxy server.</source>
        <translation>Proxy-autentisering krävs — Klienten måste först verifiera sig själv med proxyservern.</translation>
    </message>
    <message id="libfuoten-err-http-408">
        <location line="+4"/>
        <source>Request timeout — The server timed out waiting for the request.</source>
        <translation>Tidsbegränsad begäran — Servern slutade vänta på begäran.</translation>
    </message>
    <message id="libfuoten-err-http-409">
        <location line="+4"/>
        <source>Conflict — The request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.</source>
        <translation>Konflikt — Begäran kunde inte bearbetas på grund av konflikt i begäran, såsom en redigeringskonflikt mellan flera samtidiga uppdateringar.</translation>
    </message>
    <message id="libfuoten-err-http-410">
        <location line="+4"/>
        <source>Gone — The resource requested is no longer available.</source>
        <translation>Borta — Den begärda resursen är inte längre tillgänglig.</translation>
    </message>
    <message id="libfuoten-err-http-411">
        <location line="+4"/>
        <source>Length required — The request did not specify the length of its content, which is required by the requested resource.</source>
        <translation>Längd krävs — Begäran angav inte längden på dess innehåll, vilket krävs av den begärda resursen.</translation>
    </message>
    <message id="libfuoten-err-http-412">
        <location line="+4"/>
        <source>Precondition failed — The server does not meet one of the preconditions that the requester put on the request.</source>
        <translation>Förutsättning misslyckades — Servern uppfyller inte en av förutsättningarna som beställaren ställer på begäran.</translation>
    </message>
    <message id="libfuoten-err-http-413">
        <location line="+4"/>
        <source>Payload too large — The request is larger than the server is willing or able to process.</source>
        <translation>Nyttolasten är för stor — Begäran är större än servern är villig eller kan hantera.</translation>
    </message>
    <message id="libfuoten-err-http-414">
        <location line="+4"/>
        <source>URI too long — The URI provided was too long for the server to process.</source>
        <translation>URI för lång — URI:n var för lång för servern att bearbeta.</translation>
    </message>
    <message id="libfuoten-err-http-415">
        <location line="+4"/>
        <source>Unsupported media type — The request entity has a media type which the server or resource does not support.</source>
        <translation>Medietypen stöds inte — Förfrågningsenheten har en mediatyp som servern eller resursen inte stödjer.</translation>
    </message>
    <message id="libfuoten-err-http-416">
        <location line="+4"/>
        <source>Range not satisfiable — The client has asked for a portion of the resource, but the server cannot supply that portion.</source>
        <translation>Omfånget inte uppfyllbart — Klienten har bett om en del av resursen, men servern kan inte leverera den delen.</translation>
    </message>
    <message id="libfuoten-err-http-417">
        <location line="+4"/>
        <source>Expectation failed — The server cannot meet the requirements of the Expect request-header field.</source>
        <translation>Förväntningen misslyckades — Servern kan inte uppfylla kraven i fältet Expect request-header.</translation>
    </message>
    <message id="libfuoten-err-http-421">
        <location line="+4"/>
        <source>Misdirected request — The request was directed at a server that is not able to produce a response.</source>
        <translation>Missriktad begäran — Begäran riktades mot en server som inte kan producera ett svar.</translation>
    </message>
    <message id="libfuoten-err-http-426">
        <location line="+4"/>
        <source>Upgrade required — The client should switch to a different protocol.</source>
        <translation>Uppgradering krävs — Klienten bör byta till ett annat protokoll.</translation>
    </message>
    <message id="libfuoten-err-http-428">
        <location line="+4"/>
        <source>Precondition required — The origin server requires the request to be conditional.</source>
        <translation>Förutsättning saknas — Ursprungsservern kräver att begäran är villkorad.</translation>
    </message>
    <message id="libfuoten-err-http-429">
        <location line="+4"/>
        <source>Too many requests — The user has sent too many requests in a given amount of time.</source>
        <translation>För många förfrågningar — Användaren har skickat för många förfrågningar under en viss tid.</translation>
    </message>
    <message id="libfuoten-err-http-431">
        <location line="+4"/>
        <source>Request header fields too large — The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.</source>
        <translation>Begärans rubrikfält för stora — Servern är ovillig att behandla begäran eftersom antingen ett enskilt rubrikfält eller alla rubrikfält kollektivt är för stora.</translation>
    </message>
    <message id="libfuoten-err-http-500">
        <location line="+4"/>
        <source>Internal server error — An unexpected condition was ancountered on the server.</source>
        <translation>Internt serverfel — Ett oväntat villkor påträffades på servern.</translation>
    </message>
    <message id="libfuoten-err-http-501">
        <location line="+4"/>
        <source>Not implemented — The server either does not recognize the request method, or it lacks the ability to fulfill the request.</source>
        <translation>Inte implementerat — Servern känner antingen inte igen metoden, eller saknar förmåga att uppfylla begäran.</translation>
    </message>
    <message id="libfuoten-err-http-502">
        <location line="+4"/>
        <source>Bad gateway — The gateway or proxy received an invalid response from the upstream server.</source>
        <translation>Felaktig gateway — Gateway- eller proxyservern mottog ett ogiltigt svar från servern uppströms.</translation>
    </message>
    <message id="libfuoten-err-http-503">
        <location line="+4"/>
        <source>Service unavailable — The server is currently unavailable (because it is overloaded or down for maintenance).</source>
        <translation>Tjänsten är inte tillgänglig — Servern är inte tillgänglig för tillfället (eftersom den är överbelastad eller nere för underhåll).</translation>
    </message>
    <message id="libfuoten-err-http-504">
        <location line="+4"/>
        <source>Gateway timeout — The gateway or proxy and did not receive a timely response from the upstream server.</source>
        <translation>Tidsgränsen för gateway överskreds — Gateway eller proxyservern fick inte ett tillräckligt snabbt svar från servern uppströms.</translation>
    </message>
    <message id="libfuoten-err-http-505">
        <location line="+4"/>
        <source>HTTP version not supported — The server does not support the HTTP protocol version used in the request.</source>
        <translation>HTTP-versionen stöds inte — Servern stöder inte den version av HTTP-protokoll som används i begäran.</translation>
    </message>
    <message id="libfuoten-err-http-506">
        <location line="+4"/>
        <source>Variant also negotiates — Transparent content negotiation for the request results in a circular reference.</source>
        <translation>Variant förhandlar också — Transparent innehållsförhandling för begäran resulterar i en cirkulär referens.</translation>
    </message>
    <message id="libfuoten-err-http-509">
        <location line="+4"/>
        <source>Bandwidth limit exceeded — The request could not be processes cause it would exceed the bandwidth limit of the server.</source>
        <translation>Bandbreddsgränsen har överskridits — Förfrågan kunde inte vara processer eftersom det skulle överskrida serverns bandbreddsbegränsning.</translation>
    </message>
    <message id="libfuoten-err-http-510">
        <location line="+4"/>
        <source>Not extended — Further extensions to the request are required for the server to fulfil it.</source>
        <translation>Ej utökad — Ytterligare tillägg till begäran krävs för att servern skall kunna uppfylla den.</translation>
    </message>
    <message id="libfuoten-err-http-511">
        <location line="+4"/>
        <source>Network authentication required — The client needs to authenticate to gain network access.</source>
        <translation>Nätverksautentisering krävs — Klienten behöver autentiseras för att få tillgång till nätverket.</translation>
    </message>
    <message id="err-net-reply-199">
        <location line="+132"/>
        <source>An unknown proxy-related error was detected.</source>
        <translation>Ett okänt proxyrelaterat fel har identifierats.</translation>
    </message>
    <message id="err-net-reply-299">
        <location line="+4"/>
        <source>An unknown error related to the remote content was detected.</source>
        <translation>Ett okänt fel, relaterat till fjärrinnehållet, har identifierats.</translation>
    </message>
    <message id="err-net-reply-399">
        <location line="+4"/>
        <source>A breakdown in protocol was detected (parsing error, invalid or unexpected responses, etc.).</source>
        <translation>Ett sammanbrott i protokollet upptäcktes (tolkningsfel, ogiltig eller oväntad respons, etc.).</translation>
    </message>
    <message id="err-net-reply-499">
        <location line="+4"/>
        <location line="+4"/>
        <source>An unknown error related to the server response was detected.</source>
        <translation>Ett oväntat fel, relaterat till serversvaret har identifierats.</translation>
    </message>
    <message id="id-err-version-low-status-user">
        <location filename="../Fuoten/Helpers/accountvalidator.cpp" line="+78"/>
        <source>The version of your News App is lower than 5.2.4. Status and user information can not be queried.</source>
        <translation>Versionsnummret för din nyhets-app är lägre än 5.2.4. Status och användarinformation kan inte hämtas.</translation>
    </message>
    <message id="id-err-version-low-user">
        <location line="+22"/>
        <source>The version of your News App is lower than 6.0.5. User information can not be queried.</source>
        <translation>Versionsnummret för din nyhets-app är lägre än 6.0.5. Användarinformation kan inte hämtas.</translation>
    </message>
    <message id="err-version-not-found">
        <location filename="../Fuoten/API/getstatus.cpp" line="+83"/>
        <location filename="../Fuoten/API/getversion.cpp" line="+80"/>
        <source>Can not find the version information in the server reply.</source>
        <translation>Kan inte hitta versionsinformation i serversvaret.</translation>
    </message>
    <message id="err-warnings-not-found">
        <location line="+7"/>
        <source>Can not find the warnings information in the server reply.</source>
        <translation>Kan inte hitta varningsinformation i serversvaret.</translation>
    </message>
    <message id="err-displayname-not-found">
        <location filename="../Fuoten/API/getuser.cpp" line="+86"/>
        <source>Can not find the user&apos;s display name in the server reply.</source>
        <translation>Kan inte hitta användarens visningsnamn i serversvaret.</translation>
    </message>
    <message id="libfuoten-err-sqlite-db-not-ready">
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="+294"/>
        <location line="+70"/>
        <location line="+238"/>
        <location line="+124"/>
        <location line="+272"/>
        <location line="+256"/>
        <location line="+72"/>
        <location line="+57"/>
        <location line="+85"/>
        <location line="+56"/>
        <location line="+756"/>
        <location line="+26"/>
        <location line="+84"/>
        <location line="+49"/>
        <location line="+57"/>
        <location line="+34"/>
        <location line="+36"/>
        <location line="+30"/>
        <location line="+289"/>
        <location line="+45"/>
        <location line="+45"/>
        <location line="+58"/>
        <source>SQLite database not ready. Can not process requested data.</source>
        <translation>SQLite-databasen är inte klar. Kan inte bearbeta begärd data.</translation>
    </message>
    <message id="libfuoten-err-invalid-article-object">
        <location line="-430"/>
        <source>Invalid article object.</source>
        <translation>Ogiltigt artikelobjekt.</translation>
    </message>
    <message id="libfuoten-err-invalid-id-type">
        <location line="+154"/>
        <source>Invalid ID type.</source>
        <translation>Ogiltig ID-typ.</translation>
    </message>
    <message id="libfuoten-err-invalid-feed-id">
        <location filename="../Fuoten/API/deletefeed.cpp" line="+85"/>
        <location filename="../Fuoten/API/markfeedread.cpp" line="+73"/>
        <location filename="../Fuoten/API/movefeed.cpp" line="+74"/>
        <location filename="../Fuoten/API/renamefeed.cpp" line="+100"/>
        <location filename="../Fuoten/API/staritem.cpp" line="+79"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-2449"/>
        <location line="+1024"/>
        <location line="+58"/>
        <location line="+92"/>
        <location line="+49"/>
        <location line="+1361"/>
        <source>The feed ID is not valid.</source>
        <translation>Flödes-ID är inte giltigt.</translation>
    </message>
    <message id="libfuoten-err-empty-feed-name">
        <location filename="../Fuoten/API/renamefeed.cpp" line="+7"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-1417"/>
        <source>The feed name can not be empty.</source>
        <translation>Flödesnamnet kan inte vara tomt.</translation>
    </message>
    <message id="libfuoten-err-feed-not-exists">
        <location filename="../Fuoten/API/deletefeed.cpp" line="+32"/>
        <location filename="../Fuoten/API/markfeedread.cpp" line="+40"/>
        <location filename="../Fuoten/API/movefeed.cpp" line="+26"/>
        <location filename="../Fuoten/API/renamefeed.cpp" line="+34"/>
        <source>The feed was not found on the server.</source>
        <translation>Flödet kunde inte hittas på servern.</translation>
    </message>
    <message id="libfuoten-err-invalid-feed-url">
        <location filename="../Fuoten/API/createfeed.cpp" line="+72"/>
        <source>The URL of the feed is not valid.</source>
        <translation>Flödet URL är inte giltig.</translation>
    </message>
    <message id="libfuoten-err-invalid-folder-id">
        <location line="+7"/>
        <location filename="../Fuoten/API/deletefolder.cpp" line="+67"/>
        <location filename="../Fuoten/API/markfolderread.cpp" line="+74"/>
        <location filename="../Fuoten/API/movefeed.cpp" line="-19"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+74"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-1174"/>
        <location line="+315"/>
        <location line="+117"/>
        <location line="+664"/>
        <location line="+1540"/>
        <source>The folder ID is not valid.</source>
        <oldsource>Failed to rename the folder. The folder ID is not valid.</oldsource>
        <translation>Mappens ID är inte giltigt.</translation>
    </message>
    <message id="libfuoten-err-feed-exists">
        <location line="+39"/>
        <source>The feed does already exist on the server.</source>
        <translation>Flödet finns redan på servern.</translation>
    </message>
    <message id="libfuoten-err-feed-unreadable">
        <location line="+4"/>
        <source>The feed can not be read (most likely contains errors).</source>
        <translation>Flödet kan inte läsas (innehåller troligen fel).</translation>
    </message>
    <message id="libfuoten-err-empty-folder-name">
        <location filename="../Fuoten/API/createfolder.cpp" line="+71"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+7"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="-2328"/>
        <source>The folder name can not be empty.</source>
        <oldsource>Failed to rename the folder. The new folder name is empty.</oldsource>
        <translation>Mappnamnet kan inte vara tomt.</translation>
    </message>
    <message id="libfuoten-err-no-folders-array-in-reply">
        <location line="+19"/>
        <location filename="../Fuoten/API/getfolders.cpp" line="+80"/>
        <source>The data the server replied does not contain a &quot;folders&quot; array.</source>
        <translation>Serversvarets data innehåller ingen mappmatris.</translation>
    </message>
    <message id="libfuoten-err-folder-name-exists">
        <location line="+21"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+34"/>
        <source>The folder name does already exist on the server.</source>
        <oldsource>Failed to rename the folder. The new folder name does already exist on the server.</oldsource>
        <translation>Mappnamnet finns redan på servern.</translation>
    </message>
    <message id="libfuoten-err-folder-not-exists">
        <location filename="../Fuoten/API/deletefolder.cpp" line="+32"/>
        <location filename="../Fuoten/API/markfolderread.cpp" line="+41"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+4"/>
        <source>The folder was not found on the server.</source>
        <oldsource>Failed to rename the folder. The folder to rename was not found on the server.</oldsource>
        <translation>Mappen kunde inte hittas på servern.</translation>
    </message>
    <message id="libfuoten-err-folder-invalid-name">
        <location filename="../Fuoten/API/createfolder.cpp" line="+4"/>
        <location filename="../Fuoten/API/renamefolder.cpp" line="+4"/>
        <source>The folder name is invalid (for instance empty).</source>
        <oldsource>Failed to rename the folder. The new folder name is invalid (for instance empty).</oldsource>
        <translation>Mappnamnet är ogiltigt (kanske tomt?).</translation>
    </message>
    <message id="libfuoten-err-invalid-item-id">
        <location filename="../Fuoten/API/markallitemsread.cpp" line="+73"/>
        <location filename="../Fuoten/API/markfeedread.cpp" line="-33"/>
        <location filename="../Fuoten/API/markfolderread.cpp" line="-34"/>
        <location filename="../Fuoten/Storage/sqlitestorage.cpp" line="+929"/>
        <location line="+1361"/>
        <location line="+45"/>
        <source>The item ID is not valid.</source>
        <translation>Objekt-ID är inte giltig.</translation>
    </message>
    <message id="libfuoten-err-no-feeds-array-in-reply">
        <location filename="../Fuoten/API/createfeed.cpp" line="-24"/>
        <location filename="../Fuoten/API/getfeeds.cpp" line="+78"/>
        <source>The data the server replied does not contain a &quot;feeds&quot; array.</source>
        <translation>Serverns svarsdata innehåller ingen flödesmatris.</translation>
    </message>
    <message id="libfuoten-err-no-items-array-in-reply">
        <location filename="../Fuoten/API/getitems.cpp" line="+102"/>
        <location filename="../Fuoten/API/getupdateditems.cpp" line="+91"/>
        <source>The data the server replied does not contain an &quot;items&quot; array.</source>
        <translation>Serverns svarsdata innehåller ingen objektmatris.</translation>
    </message>
    <message id="libfuoten-error-invalid-id">
        <location line="+21"/>
        <location filename="../Fuoten/API/getupdateditems.cpp" line="+27"/>
        <source>Invalid ID</source>
        <translation>Ogiltigt ID</translation>
    </message>
    <message id="libfuoten-error-invalid-time">
        <location filename="../Fuoten/API/getupdateditems.cpp" line="-7"/>
        <source>Invalid last modified time.</source>
        <translation>Ogiltig tidsstämpel (senast ändrad)</translation>
    </message>
    <message id="libfuoten-tody">
        <location filename="../Fuoten/article_p.h" line="+119"/>
        <source>Today</source>
        <translation>I dag</translation>
    </message>
    <message id="libfuoten-yesterday">
        <location line="+3"/>
        <source>Yesterday</source>
        <translation>I går</translation>
    </message>
    <message id="libfuoten-short-date-format">
        <location line="+5"/>
        <source>d. MMMM</source>
        <translation>d. MMMM</translation>
    </message>
    <message id="libfuoten-long-date-format">
        <location line="+3"/>
        <source>d. MMM yyyy</source>
        <translation>d. MMM yyyy</translation>
    </message>
    <message id="libfuoten-time-format">
        <location line="+4"/>
        <source>hh:mm</source>
        <translation>hh:mm</translation>
    </message>
    <message id="libfuoten-err-invalid-article-id">
        <location filename="../Fuoten/API/markitem.cpp" line="+79"/>
        <source>The article ID is not valid.</source>
        <translation>Artikel-ID är inte giltig.</translation>
    </message>
    <message id="libfuoten-err-article-not-exists">
        <location line="+33"/>
        <location filename="../Fuoten/API/staritem.cpp" line="+41"/>
        <source>The article was not found on the server.</source>
        <translation>Artikeln kan inte hittas på servern.</translation>
    </message>
    <message id="libfuoten-err-empty-id-list">
        <location filename="../Fuoten/API/markmultipleitems.cpp" line="+89"/>
        <source>The list of IDs to mark is empty.</source>
        <translation>Listan över ID att märka, är tom.</translation>
    </message>
    <message id="libfuoten-err-empty-guidhash">
        <location filename="../Fuoten/API/staritem.cpp" line="-34"/>
        <source>The GUID hash can not be empty.</source>
        <translation>GUID-hash kan inte vara tom.</translation>
    </message>
    <message id="libfuoten-err-articles-star-unstar-list">
        <location filename="../Fuoten/API/starmultipleitems.cpp" line="+92"/>
        <source>The list of articles to star/unstar can not be empty.</source>
        <translation>Listan över artiklar att stärnmärka/avmarkera kan inte vara tom.</translation>
    </message>
    <message id="libfuoten-sync-unread-articles">
        <location filename="../Fuoten/Helpers/synchronizer.cpp" line="+196"/>
        <source>Synchronizing unread articles</source>
        <translation>Synkroniserar olästa artiklar</translation>
    </message>
    <message id="libfuoten-sync-read-articles">
        <location line="+29"/>
        <source>Synchronizing read articles</source>
        <translation>Synkroniserar lästa artiklar</translation>
    </message>
    <message id="libfuoten-sync-starred-articles">
        <location line="+27"/>
        <source>Synchronizing starred articles</source>
        <translation>Synkroniserar stjärnmärkta artiklar</translation>
    </message>
    <message id="libfuoten-sync-unstarred-articles">
        <location line="+25"/>
        <source>Synchronizing unstarred articles</source>
        <translation>Synkroniserar ej stjärnmärkta artiklar</translation>
    </message>
    <message id="libfuoten-sync-folders">
        <location line="+21"/>
        <source>Requesting folders</source>
        <translation>Frågar efter mappar</translation>
    </message>
    <message id="libfuoten-sync-feeds">
        <location line="+23"/>
        <source>Requesting feeds</source>
        <translation>Frågar efter flöden</translation>
    </message>
    <message id="libfuoten-sync-req-articles">
        <location line="+38"/>
        <source>Requesting unread articles</source>
        <translation>Frågar efter olästa artiklar</translation>
    </message>
    <message id="libfuoten-sync-req-starred-articles">
        <location line="+27"/>
        <source>Requesting starred articles</source>
        <translation>Frågar efter stjärnmärkta artiklar</translation>
    </message>
    <message id="libfuoten-sync-req-updated-articles">
        <location line="+26"/>
        <source>Requesting updated and new articles</source>
        <translation>Frågar efter uppdaterade och nya artiklar</translation>
    </message>
</context>
</TS>