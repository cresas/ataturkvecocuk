"use strict";
var activityData = {
    "type": "FROGGY_JUMPS",
    "name": "Dil Bilgisi - Doğru İfadenin Seçimi",
    "description": "Cümledeki boşlukları doğru ifadelerle tamamlayın. Seçeneklerden doğru ifadeyi sürükleyerek uygun yere yerleştirin.",
    "author": "cresas",
    "data": {
        "TIEMPO": 15,
        "TIEMPO_INFINITO": "no",
        "NUMERO_INTENTOS": 3,
        "NUMERO_INTENTOS_INFINITOS": "no",
        "ALEATORIO": "si",
        "NUMERO_PREGUNTAS_VISIBLES": 8,
        "PREGUNTAS": [
            {
                "ENUNCIADO": "……………….. gün beden eğitimi dersinde koşu yarışı düzenlenmiş.",
                "RESPUESTAS": [
                    {"RESPUESTA": "Bir", "RESPUESTA_CORRECTA": "si"},
                    {"RESPUESTA": "bir", "RESPUESTA_CORRECTA": "no"}
                ]
            },
            {
                "ENUNCIADO": "Ata’mızdan armağan, Bu bayram çocuklara. Tüm çocuklar el ele, ……………………… yarınlara.",
                "RESPUESTAS": [
                    {"RESPUESTA": "yürüyoruz", "RESPUESTA_CORRECTA": "si"},
                    {"RESPUESTA": "Yürüyoruz", "RESPUESTA_CORRECTA": "no"}
                ]
            },
            {
                "ENUNCIADO": "Bu durum …………………. Mustafa Efendi’nin dikkatini çekmiş.",
                "RESPUESTAS": [
                    {"RESPUESTA": "yüzbaşı", "RESPUESTA_CORRECTA": "no"},
                    {"RESPUESTA": "Yüzbaşı", "RESPUESTA_CORRECTA": "si"}
                ]
            },
            {
                "ENUNCIADO": "Bunu duyan öğretmeni birinciliği ………………………. vermiş.",
                "RESPUESTAS": [
                    {"RESPUESTA": "mustafaya", "RESPUESTA_CORRECTA": "no"},
                    {"RESPUESTA": "Mustafa’ya", "RESPUESTA_CORRECTA": "si"},
                    {"RESPUESTA": "Mustafaya", "RESPUESTA_CORRECTA": "no"}
                ]
            },
            {
                "ENUNCIADO": "Atatürk’ün en sevdiği atının adı ………………………….",
                "RESPUESTAS": [
                    {"RESPUESTA": "sakarya’dır.", "RESPUESTA_CORRECTA": "no"},
                    {"RESPUESTA": "Sakarya’dır.", "RESPUESTA_CORRECTA": "si"},
                    {"RESPUESTA": "sakaryadır", "RESPUESTA_CORRECTA": "no"}
                ]
            },
            {
                "ENUNCIADO": "Atatürk’e soyadını aziz ………………. milleti verdi.",
                "RESPUESTAS": [
                    {"RESPUESTA": "türk", "RESPUESTA_CORRECTA": "no"},
                    {"RESPUESTA": "Türk", "RESPUESTA_CORRECTA": "si"}
                ]
            },
            {
                "ENUNCIADO": "15 ………………….., milletimizin birlik ve beraberliğinin en güzel örneğidir.",
                "RESPUESTAS": [
                    {"RESPUESTA": "temmuz", "RESPUESTA_CORRECTA": "no"},
                    {"RESPUESTA": "Temmuz", "RESPUESTA_CORRECTA": "si"}
                ]
            },
            {
                "ENUNCIADO": "………………. …………………. gösterilerinde şiir okuyacağım.",
                "RESPUESTAS": [
                    {"RESPUESTA": "cumhuriyet bayramı", "RESPUESTA_CORRECTA": "no"},
                    {"RESPUESTA": "Cumhuriyet bayramı", "RESPUESTA_CORRECTA": "no"},
                    {"RESPUESTA": "Cumhuriyet Bayramı", "RESPUESTA_CORRECTA": "si"}
                ]
            }
        ],
        "OCULTAR_REDES": "1",
        "TEXTO_FINAL": "Cümleleri doğru tamamladınız. Tebrikler!"
    },
    "results": {
        "type": ""
    },
    "resources": "resources/",
    "urlPrint": "print.html",
    "lang": {
        "comenzar": "Başlat",
        "opciones": "Seçenekler",
        "sonido": "Ses",
        "sonidoJuego": "Genel etkiler",
        "sonidoActividad": "Belirli sesler",
        "informacion": "Bilgi",
        "imprimirActividad": "Yazdırmak",
        "volver": "Geri",
        "intentos": "",
        "tiempo": "Süre",
        "puntos": "Skor",
        "puntosMin": "Puan",
        "terminar": "Bitiş",
        "cargando": "Yükleniyor",
        "seguroAbandonar": "Etkinliği bırakmak istediğinizden emin misiniz?",
        "no": "Hayır",
        "si": "Evet",
        "ganado": "Kazandın!",
        "enhorabuena": "Tebrikler!",
        "conseguido": "Başarıldı!",
        "perdido": "Oyun Sonu!",
        "total": "Toplam",
        "vidas": "Kalan canlar",
        "reintentar": "Yeniden dene",
        "compartir": "Paylaş",
        "aciertos": "Doğru",
        "resultado": "Sonuçlar",
        "resultadoActividad": "Etkinlik Sonuçları",
        "numero": "#",
        "cuestionario": "Sorular",
        "valorar": "Derecelendir",
        "ayudanos": "Bu etkinliği derecelendirerek Educaplay'i geliştirmemize yardımcı olun",
        "omitir": "Çıkarmak",
        "msgShareResultado": "I got [puntuacion] points in [tiempo] min. in the activity [nomactividad]. Can you beat that?",
        "activityLogin_identificado": "",
        "activityLogin_identificado2": "olarak tanımlandınız",
        "activityLogin_no_identificado": "Kendinizi tanıtmak için burayı tıklayın",
        "traduccion": "This game has been translated to Turkish using an automatic translator. We will be happy to receive your corrections at support@educaplay.com.",
        "sonidoDesactivar": "Bu oyuna özel sesleri devre dışı bırakmak istediğinizden emin misiniz?",
        "infoGPU": "Yavaş GPU algılandı",
        "efectosLimitados": "Bazı görsel-işitsel efektler sınırlıdır",
        "jumpInfo1": "Hedef",
        "jumpInfo2": "Süre dolmadan doğru cevabı bulduğu yere atlayın. Süreniz her dolduğunda veya yanlış bir yere atladığınızda, suya batarsınız ve bir can kaybedersiniz. Oyun ne zaman biter? Ya kıyıya ulaşırsınız ya da tüm hayatınızı kaybedersiniz.",
        "jumpInfo3": "",
        "jumpInfo4": "",
        "jumpInfo5": "Kontroller",
        "jumpInfo6": "Cep Telefonu veya Tablet",
        "jumpInfo7": "Ekranda dokunarak herhangi bir yere atlayın. Yanıtı yakınlaştırmak için yeri basılı tutun veya parmağınızla yukarı sürükleyin. Büyüttükten sonra, bir resim varsa üzerine dokunarak onu görebilirsiniz.",
        "jumpInfo8": "Bilgisayar",
        "jumpInfo9a": "Ana fare tuşuyla üzerine tıklayarak herhangi bir yere atlayın. Bunu klavye oklarıyla da (sol, yukarı veya sağ) yapabilirsiniz.",
        "jumpInfo9b": "veya A, B ve C tuşlarıyla:",
        "jumpInfo9c": "İçeriğini büyütmek için bir yerin üzerine gelin.",
        "jumpInfo10": "Puan",
        "jumpInfo11": "",
        "jumpInfo12": "Her doğru atlama için oyundaki soru sayısıyla orantılı, hepsini doğru cevaplarsanız maksimum 100 puan kazanırsınız.",
        "jumpInfo13": "",
        "jumpInfo14": "",
        "jumpInfo15": "Kendini yarat Froggy Jumps",
        "jumpInfo16a": "Educaplay'de kayıtlı bir kişi bu Froggy Jumps oyununu sadece birkaç tıklamayla yarattı.",
        "jumpInfo16b": "Etkinlik yaratıcısı",
        "jumpInfo16c": "Kendinizi yapabilirsiniz. Ücretsiz bir hesapla istediğiniz kadar Froggy Jumps oluşturabilir ve istediğiniz kadar kişi aynı anda oynayabilir.",
        "jumpInfo16d": "Bu sayfa",
        "jumpInfo16e": "ve Froggy Jumps'ın sizin için eğitici oyunlar dünyasını açtığını göreceksiniz.",
        "jumpInfo17": "Performans geliştirme",
        "jumpInfo18": "Cihazınızda oyunla ilgili performans sorunları yaşıyorsanız, diğer tarayıcı sekmelerini veya programlarını kapatmayı denemenizi öneririz.",
        "jumpInfo19": "Destek",
        "jumpInfo20a": "Oyunun içeriğiyle ilgili herhangi bir soru veya şüpheniz için yaratıcısıyla iletişime geçmenizi öneririz.",
        "jumpInfo20b": "Veya herhangi bir sosyal ağ hesabımızda.",
        "jumpInfo21": "Kredi",
        "jumpInfo22a": "katkısıdır",
        "jumpInfo22b": "eğitici topluma."
    }
};
