# DAT Node module

## Hints
You have to provide a file called <code>config.json</code> with this content:
<pre>
{
    "environment": "www.dat.de",
    "app": the application to be used (refer to the DAT interface-compendium for valid apps, e.g. "DATECodeSelection")
    "locale": {
        "datCountryIndicator": ISO-3 countrycode,
        "country": ISO-3 countrycode,
        "language": language
    },
    "customerNumber": yourCustomerNumber,
    "customerLogin": yourCustomerLogin,
    "customerSignature": yourCustomerSignature,
    "interfacePartnerNumber": yourInterfacePartnerNumber,
    "interfacePartnerSignature": yourInterfacePartnerSignature
}
</pre>
