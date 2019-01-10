const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

const { Schema } = mongoose;

const HSEArticleSchema = new Schema({

    // Fields from EndNote
    referenceType: { type: String },
    rating: { type: String },
    author: { type: String },
    year: { type: String },
    title: { type: String },
    journal: { type: String },
    volume: { type: String },
    issue: { type: String },
    pages: { type: String },
    startPage: { type: String },
    ePubDate: { type: String },
    date: { type: String },
    typeOfArticle: { type: String },
    shortTitle: { type: String },
    alternateJournal: { type: String },
    ISSN: { type: String },
    DOI: { type: String },
    originalPublication: { type: String },
    rePrintEdition: { type: String },
    reviewedItem: { type: String },
    legalNote: { type: String },
    PMCID: { type: String },
    NIHMSID: { type: String },
    articleNumber: { type: String },
    accessionNumber: { type: String },
    callNumber: { type: String },
    label: { type: String },
    keywords: { type: String },
    abstract: { type: String },
    notes: { type: String },
    researchNotes: { type: String },
    URL: { type: String },
    fileAttachments: { type: String },
    authorAddress: { type: String },
    figure: { type: String },
    caption: { type: String },
    accessDate: { type: String },
    translatedAuthor: { type: String },
    translatedTitle: { type: String },
    nameOfDatabase: { type: String },
    databaseProvider: { type: String },
    language: { type: String },
    priority: {type: String, enum: ['LOW', 'MEDIUM', 'HIGH'], default: 'LOW' },
    source: { type: String },

    articleSource: { type: String },
    harvestDate: { type: Date, default: Date.now },

    questionType: { type: String },
    documentType: { type: String },
    


    // Stage completions

    // Eligibility and Filter Input
    _elibilityFilterJunior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _elibilityFilterJuniorEmail: { type: String, default: null },

    _elibilityFilterSenior: { type: Schema.Types.ObjectId, ref: 'Users', default: null },
    _elibilityFilterSeniorEmail: { type: String, default: null },

    elibilityFilterJuniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleEligibilityFilters', default: null },
    elibilityFilterSeniorInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleEligibilityFilters', default: null },

    // Final inputs for article's elibibility adn filter
    elibilityFilterFinalInput: { type: Schema.Types.ObjectId, ref: 'HSEArticleEligibilityFilters', default: null },

    // Elibigility and Filter Junior and Senior Input Completed
    elibilityFilterJuniorCompleted: { type: Boolean, default: false },
    elibilityFilterSeniorCompleted: { type: Boolean, default: false },

    // Set to true if an article needs to be resolved
    eligibilityFilterResolve: { type: Boolean, default: false },

    // Set to true if Eligibility and Filter state is complete
    eligibilityFilterFullCompletion: { type: Boolean, default: false },

    // Quality and Appraisal Completed
    qualityAppraisalJuniorCompleted: { type: Boolean, default: false },
    qualityAppraisalSeniorCompleted: { type: Boolean, default: false },

    // Linking Studies Completed
    linkingStudiesCompleted: { type: Boolean, default: false },

    // Setting Presentation Details Completed
    presentationDetailsCompleted: { type: Boolean, default: false },



    // Complicated tag
    complicated: { type: Boolean, default: false },

    // Users for different stages
    _uploadHarvestUser: { type: Schema.Types.ObjectId, ref: 'User' },
    _elibilityFilterJunior: { type: Schema.Types.ObjectId, ref: 'User' },
    _elibilityFilterSenior: { type: Schema.Types.ObjectId, ref: 'User' },
    _qualityAppraisalJunior: { type: Schema.Types.ObjectId, ref: 'User' },
    _qualityAppraisalSenior: { type: Schema.Types.ObjectId, ref: 'User' },
    _linkingStudiesUser: { type: Schema.Types.ObjectId, ref: 'User' },
    _presentationDetailsUser: { type: Schema.Types.ObjectId, ref: 'User' },

    // Translators
    _translatorFrench: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorSpanish: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorPortugese: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorRussian: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorArabic: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorChinese: { type: Schema.Types.ObjectId, ref: 'User' },
    _translatorEnglish: { type: Schema.Types.ObjectId, ref: 'User' },
    
    // Article relation to Batchfile
    _batchFile: { type: Schema.Types.ObjectId, ref: 'HSEArticleBatchFiles' },

    //articleName: { type: String },
/*
    system: { type: String },
    eligible: { type: Boolean, default: false },
    


    // General Article Information
    // refId: { type: String },
    updateDate: { type: Date },
    liveDate: { type: Date },
    referenceType: { type: String },
    documentType: { type: String },
    questionType: { type: String },
    title: { type: String },
    authors: { type: String },
    authorEmail: { type: String },
    publishedDate: { type: Date },
    citationEnglish: { type: [String] },
    citationFrench: { type: [String] },
    keywords: { type: [String] },
    customKeywords: { type: [String] },
    journalEdition: { type: String },
    volume: { type: String },
    issue: { type: String },
    startPage: { type: String },
    endPage: { type: String },
    editors: { type: [String] },
    publishedPlace: { type: String },
    publisher: { type: String }, 
    abstract: { type: String },
    uniqueIdDOI: { type: String },
    amstar: { type: String },
    amstartScore: { type: Number },
    amstartScoreTotal: { type: Number },
    meshTerms: { type: [String] },
    lastYearLitSearch: { type: Date },
    cochrane: { type: Boolean, default: false },
    cochraneIssueDate: { type: Date },
    epocReview: { type: Boolean, default: false },
    general: { type: Boolean, default: false },
    hotDocs: { type: Boolean, default: false },

    // PDF Text
    pdfFileSource: { type: String },
    pdfText: { type: String },

    // HyperLinks
    freeFullTextLink: { type: String },

    // Scientific Abstracts
    pubMed: { type: String },
    cochraneLibrary: { type: String },
    publisher: { type: String },

    // User Friendly Summaries
    // TODO

    // Countries / Included Studies
    countriesReportedDetail: { type: Boolean, default: false },
    documentSpecifiesCountryFocus: { type: Boolean, default: false },
    // TODO
    // Array of dictionary { country: urlLink }

    // Health System Topics
    // TODO
    

    // Canadian Areas
    // TODO


    // Domains
    // TODO



    // LMIC Focus
    targetOfDocument: { type: Boolean, default: false },
    atLeastOneLMICAuthor: { type: Boolean: default: false },
    atLeastOneLMICStudyIncluded: { type: Boolean, default: false },


    // Theme
    optimalAging: { type: Boolean, default: false },
    healthPromotionPrimaryPrevension: { type: Boolean, default: false },

    // Age
    neonates: { type: Boolean, default: false },
    pediatrics: { type: Boolean, default: false },
    adults: { type: Boolean, default: false },
    geriatrics: { type: Boolean, default: false },

    // Information for evidence briefs
    focusOfDocument: { type: String },
    keyFindings: { type: String },


    // Target
    individual: { type: Boolean, default: false },
    community: { type: Boolean, default: false },
    healthSystem: { type: Boolean, default: false },

    // Ontario Priority Areas

    communityBasedCare: { type: Boolean, default: false },
    healthSystemPerformanceSystainability: { type: Boolean, default: false },
    healthyLivingWithFocusOnTobacoControl: { type: Boolean, default: false },
    mentalHealthAddictions: { type: Boolean, default: false },
    nursingResearch: { type: Boolean, default: false },
    primaryCareReform: { type: Boolean, default: false },
    qualityImprovementSafety: { type: Boolean, default: false },
    seniorsCare: { type: Boolean, default: false },
    vulnerableSpecialHealthNeedsPopulations: { type: Boolean, default: false },
    womensHealth: { type: Boolean, default: false },

    // Article Status
    articleStatus: { type: String },
    removalReason: { type: String },
    
*/



});

HSEArticleSchema.plugin(mongoosastic);

mongoose.model('HSEArticles', HSEArticleSchema);