

/\A/;

/\d*(\d)/;
/(?!(?:.*\n)+(?:.{10}){0}\1\b)/;
/(?!\d*\ (?:.{10})*?\1\b)/;
/(?!\d*\ (?:.{10}){0,1}\1\b)/;
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\1\b)/;
/\d*\s+/;

/\d*(?!\1)/;
/(\d)/;
/(?!(?:.*\n)+(?:.{10}){1}\2\b)/;
/(?!\d*\ (?:.{10})*?\2\b)/;
/(?!\d*\ (?:.{10}){0,0}\2\b)/;
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\2\b)/;
/\d*\s+/;

/\d*(?!\1|\2)/;
/(\d)/;
/(?!(?:.*\n)+(?:.{10}){2}\3\b)/;
/(?!\d*\ (?:.{10})*?\3\b)/;
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\3\b)/;
/\d*\s+/;

/\d*(?!\1|\2|\3)/;
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\4\b)/
/(?!\d*\ (?:.{10})*?\4\b)/
/(?!\d*\ (?:.{10}){0,1}\4\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\4\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\4)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\5\b)/
/(?!\d*\ (?:.{10})*?\5\b)/
/(?!\d*\ (?:.{10}){0,0}\5\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\5\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\4|\5)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\6\b)/
/(?!\d*\ (?:.{10})*?\6\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\6\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\4|\5|\6)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\7\b)/
/(?!\d*\ (?:.{10})*?\7\b)/
/(?!\d*\ (?:.{10}){0,1}\7\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\7\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\4|\5|\6|\7)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\8\b)/
/(?!\d*\ (?:.{10})*?\8\b)/
/(?!\d*\ (?:.{10}){0,0}\8\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\8\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\4|\5|\6|\7|\8)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\9\b)/
/(?!\d*\ (?:.{10})*?\9\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\9\b)/
/\d*\s+/

/\d*(?!\1|\2|\3)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\10\b)/
/(?!\d*\ (?:.{10})*?\10\b)/
/(?!\d*\ (?:.{10}){0,1}\10\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\10\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\10)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\11\b)/
/(?!\d*\ (?:.{10})*?\11\b)/
/(?!\d*\ (?:.{10}){0,0}\11\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\11\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\10|\11)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\12\b)/
/(?!\d*\ (?:.{10})*?\12\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\12\b)/
/\d*\s+/

/\d*(?!\4|\5|\6|\10|\11|\12)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\13\b)/
/(?!\d*\ (?:.{10})*?\13\b)/
/(?!\d*\ (?:.{10}){0,1}\13\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\13\b)/
/\d*\s+/

/\d*(?!\4|\5|\6|\10|\11|\12|\13)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\14\b)/
/(?!\d*\ (?:.{10})*?\14\b)/
/(?!\d*\ (?:.{10}){0,0}\14\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\14\b)/
/\d*\s+/

/\d*(?!\4|\5|\6|\10|\11|\12|\13|\14)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\15\b)/
/(?!\d*\ (?:.{10})*?\15\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\15\b)/
/\d*\s+/

/\d*(?!\7|\8|\9|\10|\11|\12|\13|\14|\15)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\16\b)/
/(?!\d*\ (?:.{10})*?\16\b)/
/(?!\d*\ (?:.{10}){0,1}\16\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\16\b)/
/\d*\s+/

/\d*(?!\7|\8|\9|\10|\11|\12|\13|\14|\15|\16)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\17\b)/
/(?!\d*\ (?:.{10})*?\17\b)/
/(?!\d*\ (?:.{10}){0,0}\17\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\17\b)/
/\d*\s+/

/\d*(?!\7|\8|\9|\10|\11|\12|\13|\14|\15|\16|\17)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\18\b)/
/(?!\d*\ (?:.{10})*?\18\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\18\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\10|\11|\12)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\19\b)/
/(?!\d*\ (?:.{10})*?\19\b)/
/(?!\d*\ (?:.{10}){0,1}\19\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\10|\11|\12|\19)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\20\b)/
/(?!\d*\ (?:.{10})*?\20\b)/
/(?!\d*\ (?:.{10}){0,0}\20\b)/
/\d*\s+/

/\d*(?!\1|\2|\3|\10|\11|\12|\19|\20)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\21\b)/
/(?!\d*\ (?:.{10})*?\21\b)/
/\d*\s+/

/\d*(?!\4|\5|\6|\13|\14|\15|\19|\20|\21)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\22\b)/
/(?!\d*\ (?:.{10})*?\22\b)/
/(?!\d*\ (?:.{10}){0,1}\22\b)/
/\d*\s+/

/\d*(?!\4|\5|\6|\13|\14|\15|\19|\20|\21|\22)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\23\b)/
/(?!\d*\ (?:.{10})*?\23\b)/
/(?!\d*\ (?:.{10}){0,0}\23\b)/
/\d*\s+/

/\d*(?!\4|\5|\6|\13|\14|\15|\19|\20|\21|\22|\23)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\24\b)/
/(?!\d*\ (?:.{10})*?\24\b)/
/\d*\s+/

/\d*(?!\7|\8|\9|\16|\17|\18|\19|\20|\21|\22|\23|\24)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\25\b)/
/(?!\d*\ (?:.{10})*?\25\b)/
/(?!\d*\ (?:.{10}){0,1}\25\b)/
/\d*\s+/

/\d*(?!\7|\8|\9|\16|\17|\18|\19|\20|\21|\22|\23|\24|\25)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\26\b)/
/(?!\d*\ (?:.{10})*?\26\b)/
/(?!\d*\ (?:.{10}){0,0}\26\b)/
/\d*\s+/

/\d*(?!\7|\8|\9|\16|\17|\18|\19|\20|\21|\22|\23|\24|\25|\26)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\27\b)/
/(?!\d*\ (?:.{10})*?\27\b)/
/\d*\s+/

/\d*(?!\1|\10|\19)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\28\b)/
/(?!\d*\ (?:.{10})*?\28\b)/
/(?!\d*\ (?:.{10}){0,1}\28\b)/
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\28\b)/
/\d*\s+/

/\d*(?!\2|\11|\20|\28)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\29\b)/
/(?!\d*\ (?:.{10})*?\29\b)/
/(?!\d*\ (?:.{10}){0,0}\29\b)/
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\29\b)/
/\d*\s+/

/\d*(?!\3|\12|\21|\28|\29)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\30\b)/
/(?!\d*\ (?:.{10})*?\30\b)/
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\30\b)/
/\d*\s+/

/\d*(?!\4|\13|\22|\28|\29|\30)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\31\b)/
/(?!\d*\ (?:.{10})*?\31\b)/
/(?!\d*\ (?:.{10}){0,1}\31\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\31\b)/
/\d*\s+/

/\d*(?!\5|\14|\23|\28|\29|\30|\31)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\32\b)/
/(?!\d*\ (?:.{10})*?\32\b)/
/(?!\d*\ (?:.{10}){0,0}\32\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\32\b)/
/\d*\s+/

/\d*(?!\6|\15|\24|\28|\29|\30|\31|\32)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\33\b)/
/(?!\d*\ (?:.{10})*?\33\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\33\b)/
/\d*\s+/

/\d*(?!\7|\16|\25|\28|\29|\30|\31|\32|\33)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\34\b)/
/(?!\d*\ (?:.{10})*?\34\b)/
/(?!\d*\ (?:.{10}){0,1}\34\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\34\b)/
/\d*\s+/

/\d*(?!\8|\17|\26|\28|\29|\30|\31|\32|\33|\34)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\35\b)/
/(?!\d*\ (?:.{10})*?\35\b)/
/(?!\d*\ (?:.{10}){0,0}\35\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\35\b)/
/\d*\s+/

/\d*(?!\9|\18|\27|\28|\29|\30|\31|\32|\33|\34|\35)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\36\b)/
/(?!\d*\ (?:.{10})*?\36\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\36\b)/
/\d*\s+/

/\d*(?!\1|\10|\19|\28|\29|\30)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\37\b)/
/(?!\d*\ (?:.{10})*?\37\b)/
/(?!\d*\ (?:.{10}){0,1}\37\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\37\b)/
/\d*\s+/

/\d*(?!\2|\11|\20|\28|\29|\30|\37)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\38\b)/
/(?!\d*\ (?:.{10})*?\38\b)/
/(?!\d*\ (?:.{10}){0,0}\38\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\38\b)/
/\d*\s+/

/\d*(?!\3|\12|\21|\28|\29|\30|\37|\38)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\39\b)/
/(?!\d*\ (?:.{10})*?\39\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\39\b)/
/\d*\s+/

/\d*(?!\4|\13|\22|\31|\32|\33|\37|\38|\39)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\40\b)/
/(?!\d*\ (?:.{10})*?\40\b)/
/(?!\d*\ (?:.{10}){0,1}\40\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\40\b)/
/\d*\s+/

/\d*(?!\5|\14|\23|\31|\32|\33|\37|\38|\39|\40)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\41\b)/
/(?!\d*\ (?:.{10})*?\41\b)/
/(?!\d*\ (?:.{10}){0,0}\41\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\41\b)/
/\d*\s+/

/\d*(?!\6|\15|\24|\31|\32|\33|\37|\38|\39|\40|\41)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\42\b)/
/(?!\d*\ (?:.{10})*?\42\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\42\b)/
/\d*\s+/

/\d*(?!\7|\16|\25|\34|\35|\36|\37|\38|\39|\40|\41|\42)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\43\b)/
/(?!\d*\ (?:.{10})*?\43\b)/
/(?!\d*\ (?:.{10}){0,1}\43\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\43\b)/
/\d*\s+/

/\d*(?!\8|\17|\26|\34|\35|\36|\37|\38|\39|\40|\41|\42|\43)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\44\b)/
/(?!\d*\ (?:.{10})*?\44\b)/
/(?!\d*\ (?:.{10}){0,0}\44\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\44\b)/
/\d*\s+/

/\d*(?!\9|\18|\27|\34|\35|\36|\37|\38|\39|\40|\41|\42|\43|\44)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\45\b)/
/(?!\d*\ (?:.{10})*?\45\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\45\b)/
/\d*\s+/

/\d*(?!\1|\10|\19|\28|\29|\30|\37|\38|\39)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\46\b)/
/(?!\d*\ (?:.{10})*?\46\b)/
/(?!\d*\ (?:.{10}){0,1}\46\b)/
/\d*\s+/

/\d*(?!\2|\11|\20|\28|\29|\30|\37|\38|\39|\46)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\47\b)/
/(?!\d*\ (?:.{10})*?\47\b)/
/(?!\d*\ (?:.{10}){0,0}\47\b)/
/\d*\s+/

/\d*(?!\3|\12|\21|\28|\29|\30|\37|\38|\39|\46|\47)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\48\b)/
/(?!\d*\ (?:.{10})*?\48\b)/
/\d*\s+/

/\d*(?!\4|\13|\22|\31|\32|\33|\40|\41|\42|\46|\47|\48)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\49\b)/
/(?!\d*\ (?:.{10})*?\49\b)/
/(?!\d*\ (?:.{10}){0,1}\49\b)/
/\d*\s+/

/\d*(?!\5|\14|\23|\31|\32|\33|\40|\41|\42|\46|\47|\48|\49)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\50\b)/
/(?!\d*\ (?:.{10})*?\50\b)/
/(?!\d*\ (?:.{10}){0,0}\50\b)/
/\d*\s+/

/\d*(?!\6|\15|\24|\31|\32|\33|\40|\41|\42|\46|\47|\48|\49|\50)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\51\b)/
/(?!\d*\ (?:.{10})*?\51\b)/
/\d*\s+/

/\d*(?!\7|\16|\25|\34|\35|\36|\43|\44|\45|\46|\47|\48|\49|\50|\51)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\52\b)/
/(?!\d*\ (?:.{10})*?\52\b)/
/(?!\d*\ (?:.{10}){0,1}\52\b)/
/\d*\s+/

/\d*(?!\8|\17|\26|\34|\35|\36|\43|\44|\45|\46|\47|\48|\49|\50|\51|\52)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\53\b)/
/(?!\d*\ (?:.{10})*?\53\b)/
/(?!\d*\ (?:.{10}){0,0}\53\b)/
/\d*\s+/

/\d*(?!\9|\18|\27|\34|\35|\36|\43|\44|\45|\46|\47|\48|\49|\50|\51|\52|\53)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\54\b)/
/(?!\d*\ (?:.{10})*?\54\b)/
/\d*\s+/

/\d*(?!\1|\10|\19|\28|\37|\46)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\55\b)/
/(?!\d*\ (?:.{10})*?\55\b)/
/(?!\d*\ (?:.{10}){0,1}\55\b)/
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\55\b)/
/\d*\s+/

/\d*(?!\2|\11|\20|\29|\38|\47|\55)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\56\b)/
/(?!\d*\ (?:.{10})*?\56\b)/
/(?!\d*\ (?:.{10}){0,0}\56\b)/
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\56\b)/
/\d*\s+/

/\d*(?!\3|\12|\21|\30|\39|\48|\55|\56)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\57\b)/
/(?!\d*\ (?:.{10})*?\57\b)/
/(?!(?:.*\n){1,2}(?:.{30}){0}(?:.{10}){0,2}\57\b)/
/\d*\s+/

/\d*(?!\4|\13|\22|\31|\40|\49|\55|\56|\57)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\58\b)/
/(?!\d*\ (?:.{10})*?\58\b)/
/(?!\d*\ (?:.{10}){0,1}\58\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\58\b)/
/\d*\s+/

/\d*(?!\5|\14|\23|\32|\41|\50|\55|\56|\57|\58)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\59\b)/
/(?!\d*\ (?:.{10})*?\59\b)/
/(?!\d*\ (?:.{10}){0,0}\59\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\59\b)/
/\d*\s+/

/\d*(?!\6|\15|\24|\33|\42|\51|\55|\56|\57|\58|\59)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\60\b)/
/(?!\d*\ (?:.{10})*?\60\b)/
/(?!(?:.*\n){1,2}(?:.{30}){1}(?:.{10}){0,2}\60\b)/
/\d*\s+/

/\d*(?!\7|\16|\25|\34|\43|\52|\55|\56|\57|\58|\59|\60)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\61\b)/
/(?!\d*\ (?:.{10})*?\61\b)/
/(?!\d*\ (?:.{10}){0,1}\61\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\61\b)/
/\d*\s+/

/\d*(?!\8|\17|\26|\35|\44|\53|\55|\56|\57|\58|\59|\60|\61)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\62\b)/
/(?!\d*\ (?:.{10})*?\62\b)/
/(?!\d*\ (?:.{10}){0,0}\62\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\62\b)/
/\d*\s+/

/\d*(?!\9|\18|\27|\36|\45|\54|\55|\56|\57|\58|\59|\60|\61|\62)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\63\b)/
/(?!\d*\ (?:.{10})*?\63\b)/
/(?!(?:.*\n){1,2}(?:.{30}){2}(?:.{10}){0,2}\63\b)/
/\d*\s+/

/\d*(?!\1|\10|\19|\28|\37|\46|\55|\56|\57)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\64\b)/
/(?!\d*\ (?:.{10})*?\64\b)/
/(?!\d*\ (?:.{10}){0,1}\64\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\64\b)/
/\d*\s+/

/\d*(?!\2|\11|\20|\29|\38|\47|\55|\56|\57|\64)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\65\b)/
/(?!\d*\ (?:.{10})*?\65\b)/
/(?!\d*\ (?:.{10}){0,0}\65\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\65\b)/
/\d*\s+/

/\d*(?!\3|\12|\21|\30|\39|\48|\55|\56|\57|\64|\65)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\66\b)/
/(?!\d*\ (?:.{10})*?\66\b)/
/(?!(?:.*\n){1,1}(?:.{30}){0}(?:.{10}){0,2}\66\b)/
/\d*\s+/

/\d*(?!\4|\13|\22|\31|\40|\49|\58|\59|\60|\64|\65|\66)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\67\b)/
/(?!\d*\ (?:.{10})*?\67\b)/
/(?!\d*\ (?:.{10}){0,1}\67\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\67\b)/
/\d*\s+/

/\d*(?!\5|\14|\23|\32|\41|\50|\58|\59|\60|\64|\65|\66|\67)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\68\b)/
/(?!\d*\ (?:.{10})*?\68\b)/
/(?!\d*\ (?:.{10}){0,0}\68\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\68\b)/
/\d*\s+/

/\d*(?!\6|\15|\24|\33|\42|\51|\58|\59|\60|\64|\65|\66|\67|\68)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\69\b)/
/(?!\d*\ (?:.{10})*?\69\b)/
/(?!(?:.*\n){1,1}(?:.{30}){1}(?:.{10}){0,2}\69\b)/
/\d*\s+/

/\d*(?!\7|\16|\25|\34|\43|\52|\61|\62|\63|\64|\65|\66|\67|\68|\69)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\70\b)/
/(?!\d*\ (?:.{10})*?\70\b)/
/(?!\d*\ (?:.{10}){0,1}\70\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\70\b)/
/\d*\s+/

/\d*(?!\8|\17|\26|\35|\44|\53|\61|\62|\63|\64|\65|\66|\67|\68|\69|\70)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\71\b)/
/(?!\d*\ (?:.{10})*?\71\b)/
/(?!\d*\ (?:.{10}){0,0}\71\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\71\b)/
/\d*\s+/

/\d*(?!\9|\18|\27|\36|\45|\54|\61|\62|\63|\64|\65|\66|\67|\68|\69|\70|\71)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\72\b)/
/(?!\d*\ (?:.{10})*?\72\b)/
/(?!(?:.*\n){1,1}(?:.{30}){2}(?:.{10}){0,2}\72\b)/
/\d*\s+/

/\d*(?!\1|\10|\19|\28|\37|\46|\55|\56|\57|\64|\65|\66)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){0}\73\b)/
/(?!\d*\ (?:.{10})*?\73\b)/
/(?!\d*\ (?:.{10}){0,1}\73\b)/
/\d*\s+/

/\d*(?!\2|\11|\20|\29|\38|\47|\55|\56|\57|\64|\65|\66|\73)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){1}\74\b)/
/(?!\d*\ (?:.{10})*?\74\b)/
/(?!\d*\ (?:.{10}){0,0}\74\b)/
/\d*\s+/

/\d*(?!\3|\12|\21|\30|\39|\48|\55|\56|\57|\64|\65|\66|\73|\74)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){2}\75\b)/
/(?!\d*\ (?:.{10})*?\75\b)/
/\d*\s+/

/\d*(?!\4|\13|\22|\31|\40|\49|\58|\59|\60|\67|\68|\69|\73|\74|\75)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){3}\76\b)/
/(?!\d*\ (?:.{10})*?\76\b)/
/(?!\d*\ (?:.{10}){0,1}\76\b)/
/\d*\s+/

/\d*(?!\5|\14|\23|\32|\41|\50|\58|\59|\60|\67|\68|\69|\73|\74|\75|\76)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){4}\77\b)/
/(?!\d*\ (?:.{10})*?\77\b)/
/(?!\d*\ (?:.{10}){0,0}\77\b)/
/\d*\s+/

/\d*(?!\6|\15|\24|\33|\42|\51|\58|\59|\60|\67|\68|\69|\73|\74|\75|\76|\77)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){5}\78\b)/
/(?!\d*\ (?:.{10})*?\78\b)/
/\d*\s+/

/\d*(?!\7|\16|\25|\34|\43|\52|\61|\62|\63|\70|\71|\72|\73|\74|\75|\76|\77|\78)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){6}\79\b)/
/(?!\d*\ (?:.{10})*?\79\b)/
/(?!\d*\ (?:.{10}){0,1}\79\b)/
/\d*\s+/

/\d*(?!\8|\17|\26|\35|\44|\53|\61|\62|\63|\70|\71|\72|\73|\74|\75|\76|\77|\78|\79)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){7}\80\b)/
/(?!\d*\ (?:.{10})*?\80\b)/
/(?!\d*\ (?:.{10}){0,0}\80\b)/
/\d*\s+/

/\d*(?!\9|\18|\27|\36|\45|\54|\61|\62|\63|\70|\71|\72|\73|\74|\75|\76|\77|\78|\79|\80)/
/(\d)/
/(?!(?:.*\n)+(?:.{10}){8}\81\b)/
/(?!\d*\ (?:.{10})*?\81\b)/
/\d*\s+/

/\Z/
