declare namespace Zotero {
	/**
	 * @see https://github.com/zotero/utilities/blob/master/utilities.js
	 */
	namespace Utilities {
		/** @see https://github.com/zotero/utilities/blob/master/utilities.js#L54 */
		function debounce<T>(fn: T, delay?: number): T
		function throttle<T>(
			fn: T,
			wait: number,
			options?: { leading: boolean; trailing: boolean }
		): T
		function capitalizeName(s: string): string
		function cleanAuthor<T extends CreatorType>(
			author: string,
			creatorType: T,
			useComma?: boolean
		): Creator<T>
		function trim(s: string): string
		function trimInternal(s: string): string
		function superCleanString(s: string): string
		function isHTTPURL(url: string, allowNoScheme: boolean): boolean
		function cleanURL(url: string, tryHttp: boolean): string
		function cleanTags(s: string): string
		function cleanDOI(s: string): string
		function cleanISBN(s: string, dontValidate: boolean): string | false
		function toISBN13(isbnStr: string): string
		function cleanISSN(issnStr: string): string | false
		function text2html(s: string, singleNewlineIsParagraph: boolean): string
		function htmlSpecialChars(s: string): string
		function unescapeHTML(s: string): string
		// unimplemented: dom2text
		function autoLink(s: string): string
		function parseMarkup(s: string): string
		function levenshtein(a: string, b: string): number
		function isEmpty(o: object): boolean
		function arrayDiff<Type>(
			array1: Type[],
			array2: Type[],
			useIndex?: false
		): Type[]
		function arrayDiff<Type>(
			array1: Type[],
			array2: Type[],
			useIndex: true
		): number[]
		function arrayEquals<Type>(array1: Type[], array2: Type[]): boolean
		function arrayShuffle<Type>(array: Type[]): Type[]
		function arrayUnique<Type>(array: Type[]): Type[]
		function forEachChunk<Type, RetType>(
			array: Type[],
			chunkSize: number,
			func: (chunk: Type[]) => RetType
		): RetType[]
		function assignProps(target: any, source: any, props?: string[]): void
		function rand(min: number, max: number): number
		function getPageRange(pages: string): [fromPage: number, toPage: number]
		function lpad(s: string, pad: string, length: number): string
		function ellipsize(
			s: string,
			len: number,
			wordBoundary?: boolean,
			countChars?: boolean
		): string
		function pluralize(
			num: number,
			forms: [singular: string, plural: string] | string
		): string
		function numberFormat(
			num: number,
			decimalPlaces: number,
			decimalPoint?: string,
			thousandsSep?: string
		): string
		function removeDiacritics(s: string, lowercaseOnly?: boolean): string
		// processAsync
		function deepCopy<Type>(obj: Type): Type
		function itemTypeExists(itemType: ItemType): boolean
		function getCreatorsForType(itemType: ItemType): CreatorType[]
		function fieldIsValidForType(field: string, itemType: ItemType): boolean
		function getLocalizedCreatorType(itemType: ItemType): string
		function quotemeta(literal: string): string
		function xpath(
			elements: Element | Element[],
			xpath: string,
			namespaces?: { [prefix: string]: string }
		): Element[]
		function xpathText(
			node: Element | Element[],
			xpath: string,
			namespaces?: { [prefix: string]: string },
			delimiter?: string
		): string | undefined
		function randomString(len?: number, chars?: string): string
		// varDump
		function itemToCSLJSON(item: Zotero.Item): any | Promise<any>
		function itemFromCSLJSON(item: Zotero.Item, cslItem: any): void
		function parseURL(url: string): {
			fileName: string
			fileExtension: string
			fileBaseName: string
		}
		function resolveIntermediateURL(url: string): string
		function stringToUTF8Array(
			s: string,
			array: number[] | Uint8Array,
			offset?: number
		): void
		function getStringByteLength(s: string): number
		function determineAttachmentIcon(attachment: Attachment): string
		function generateObjectKey(): string
		function isValidObjectKey(s: string): boolean
		// XRegExp

		function capitalizeTitle(s: string, force?: boolean): string
		function getVersion(): string
		function getItemArray(
			doc: Document,
			inHere: Element | Element[],
			urlRe?: RegExp,
			rejectRe?: RegExp
		): { [link: string]: string }
		/** @deprecated use `requestDocument()` */
		function processDocuments(
			urls: string | string[],
			processor: (doc: Document) => any,
			noCompleteOnError?: boolean
		): void
		/** @deprecated use `request()`, `requestText()`, `requestJSON()`, or `requestDocument()` */
		function doGet(
			urls: string | string[],
			processor?: (text: string) => void,
			done?: () => void,
			responseCharset?: string,
			requestHeaders?: { [header: string]: string },
			successCodes?: number[]
		): boolean
		/** @deprecated use `request()`, `requestText()`, `requestJSON()`, or `requestDocument()` */
		function doPost(
			url: string,
			body: string,
			onDone: (text: string, xmlhttp: XMLHttpRequest) => void,
			requestHeaders?: { [header: string]: string },
			responseCharset?: string,
			successCodes?: number[]
		): boolean
		function urlToProxy(url: string): string
		function urlToProper(url: string): string
		function formatDate(date: Date, shortFormat?: boolean): string
		function strToDate(str: string): Date
		function strToISO(str: string): string
		function createContextObject(
			item: Zotero.Item,
			version: string,
			asObj?: boolean
		)
		function parseContextObject(
			co: string,
			item: Zotero.Item[]
		): Zotero.Item[] | false

		type HTTPRequestParameters<T extends HTTPResponseType> = {
			method?: string = 'GET'
			headers?: Record<string, string>
			body?: string
			responseCharset?: string
			responseType?: T = 'text'
		}

		type HTTPResponseType = 'text' | 'json' | 'document'

		type HTTPResponse<T> = {
			status: number
			headers: Record<string, string>
			body: T
		}

		function request(
			url: string,
			params?: HTTPRequestParameters<'text'>
		): Promise<HTTPResponse<string>>

		function requestText(
			url: string,
			params?: HTTPRequestParameters<'text'>
		): Promise<string>

		function request(
			url: string,
			params?: HTTPRequestParameters<'json'>
		): Promise<HTTPResponse<any>>

		function requestJSON(
			url: string,
			params?: HTTPRequestParameters<'json'>
		): Promise<any>

		function request(
			url: string,
			params?: HTTPRequestParameters<'document'>
		): Promise<HTTPResponse<Document>>

		function requestDocument(
			url: string,
			params?: HTTPRequestParameters<'document'>
		): Promise<Document>
	}

	interface Attachment {
		title: string
		snapshot?: boolean
		mimeType?: string
		url?: string
		document?: Document
		path?: string
		proxy?: boolean
	}

	type CreatorType =
		| 'artist'
		| 'contributor'
		| 'performer'
		| 'composer'
		| 'wordsBy'
		| 'sponsor'
		| 'cosponsor'
		| 'author'
		| 'commenter'
		| 'editor'
		| 'translator'
		| 'seriesEditor'
		| 'bookAuthor'
		| 'counsel'
		| 'programmer'
		| 'reviewedAuthor'
		| 'recipient'
		| 'director'
		| 'scriptwriter'
		| 'producer'
		| 'interviewee'
		| 'interviewer'
		| 'cartographer'
		| 'inventor'
		| 'attorneyAgent'
		| 'podcaster'
		| 'guest'
		| 'presenter'
		| 'castMember'

	interface Creator<T extends CreatorType> {
		lastName?: string
		firstName?: string
		creatorType: T
		fieldMode?: 1
	}

	interface Tag {
		tag: string
	}

	interface ItemTypes {
		artwork: ArtworkItem
		audioRecording: AudioRecordingItem
		bill: BillItem
		blogPost: BlogPostItem
		book: BookItem
		bookSection: BookSectionItem
		case: CaseItem
		computerProgram: ComputerProgramItem
		conferencePaper: ConferencePaperItem
		dictionaryEntry: DictionaryEntryItem
		document: DocumentItem
		email: EmailItem
		encyclopediaArticle: EncyclopediaArticleItem
		film: FilmItem
		forumPost: ForumPostItem
		hearing: HearingItem
		instantMessage: InstantMessageItem
		interview: InterviewItem
		journalArticle: JournalArticleItem
		letter: LetterItem
		magazineArticle: MagazineArticleItem
		manuscript: ManuscriptItem
		map: MapItem
		newspaperArticle: NewspaperArticleItem
		patent: PatentItem
		podcast: PodcastItem
		preprint: PreprintItem
		presentation: PresentationItem
		radioBroadcast: RadioBroadcastItem
		report: ReportItem
		statute: StatuteItem
		thesis: ThesisItem
		tvBroadcast: TVBroadcastItem
		videoRecording: VideoRecordingItem
		webpage: WebpageItem
	}

	type ItemType = keyof ItemTypes

	var Item: {
		new <T extends ItemType>(itemType: T): ItemTypes[T]
		new (itemType: string): Item
	}

	/**
	 * Generic item with unknown type
	 */
	type Item = ItemTypes[ItemType]

	interface BaseItem<I extends ItemType, C extends CreatorType> {
		abstractNote?: string
		accessDate?: string
		attachments: Attachment[]
		complete(): void
		creators: Creator<C>[]
		extra?: string
		itemType: I
		language?: string
		notes: Note[]
		rights?: string
		seeAlso: string[]
		shortTitle?: string
		tags: Tag[]
		url?: string
	}

	interface LibraryBaseItem {
		archive?: string
		archiveLocation?: string
		callNumber?: string
		date?: string
		libraryCatalog?: string
		title?: string
	}

	interface SeriesBaseItem {
		series?: string
		seriesNumber?: string
	}

	interface PublishedBaseItem {
		place?: string
		date?: string
		publisher?: string
	}

	interface MediaBaseItem {
		date?: string
		runningTime?: string
	}

	interface VolumeBaseItem {
		ISBN?: string
		numberOfVolumes?: string
		volume?: string
	}

	interface ArtworkItem
		extends LibraryBaseItem,
			BaseItem<'artwork', 'artist' | 'contributor'> {
		artworkMedium?: string
		artworkSize?: string
	}

	interface AudioRecordingItem
		extends MediaBaseItem,
			LibraryBaseItem,
			VolumeBaseItem,
			BaseItem<
				'audioRecording',
				'performer' | 'composer' | 'contributor' | 'wordsBy'
			> {
		audioRecordingFormat?: string
		seriesTitle?: string
		place?: string
		label?: string
		ISBN?: string
	}

	interface BillItem
		extends BaseItem<'bill', 'sponsor' | 'contributor' | 'cosponsor'> {
		title?: string
		abstractNote?: string
		billNumber?: string
		code?: string
		codePages?: string
		codeVolume?: string
		date?: string
		history?: string
		language?: string
		legislativeBody?: string
		section?: string
		session?: string
	}

	interface BlogPostItem
		extends BaseItem<'blogPost', 'author' | 'commenter' | 'contributor'> {
		blogTitle?: string
		date?: string
		language?: string
		title?: string
		websiteType?: string
	}

	interface BookItem
		extends PublishedBaseItem,
			VolumeBaseItem,
			SeriesBaseItem,
			LibraryBaseItem,
			BaseItem<
				'book',
				'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
			> {
		edition?: string
		numPages?: string
	}

	interface BookSectionItem
		extends SeriesBaseItem,
			LibraryBaseItem,
			VolumeBaseItem,
			BaseItem<
				'bookSection',
				| 'author'
				| 'bookAuthor'
				| 'contributor'
				| 'editor'
				| 'seriesEditor'
				| 'translator'
			> {
		bookTitle?: string
		edition?: string
		pages?: string
	}

	interface CaseItem
		extends BaseItem<'case', 'author' | 'contributor' | 'counsel'> {
		caseName?: string
		court?: string
		dateDecided?: string
		docketNumber?: string
		firstPage?: string
		history?: string
		language?: string
		reporter?: string
		reporterVolume?: string
	}

	interface ComputerProgramItem
		extends LibraryBaseItem,
			BaseItem<'computerProgram', 'programmer' | 'contributor'> {
		company?: string
		ISBN?: string
		place?: string
		programmingLanguage?: string
		seriesTitle?: string
		system?: string
		versionNumber?: string
		/** Use {@link programmingLanguage} */
		language: never
	}

	interface ConferencePaperItem
		extends LibraryBaseItem,
			BaseItem<
				'conferencePaper',
				'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
			> {
		proceedingsTitle?: string
		conferenceName?: string
		volume?: string
		pages?: string
		series?: string
		DOI?: string
		ISBN?: string
	}

	interface DictionaryEntryItem
		extends SeriesBaseItem,
			PublishedBaseItem,
			VolumeBaseItem,
			LibraryBaseItem,
			BaseItem<
				'dictionaryEntry',
				'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
			> {
		dictionaryTitle?: string
		edition?: string
		ISBN?: string
		pages?: string
	}

	interface DocumentItem
		extends PublishedBaseItem,
			LibraryBaseItem,
			BaseItem<
				'document',
				'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator'
			> {}

	interface EmailItem
		extends BaseItem<'email', 'author' | 'contributor' | 'recipient'> {
		date?: string
		subject?: string
	}

	interface EncyclopediaArticleItem
		extends PublishedBaseItem,
			SeriesBaseItem,
			VolumeBaseItem,
			LibraryBaseItem,
			BaseItem<
				'encyclopediaArticle',
				'author' | 'contributor' | 'editor' | 'seriesEditor' | 'translator'
			> {
		edition?: string
		encyclopediaTitle?: string
		pages?: string
	}

	interface FilmItem
		extends MediaBaseItem,
			LibraryBaseItem,
			BaseItem<
				'film',
				'director' | 'contributor' | 'producer' | 'scriptwriter'
			> {
		distributor?: string
		genre?: string
		videoRecordingFormat?: string
	}

	interface ForumPostItem
		extends BaseItem<'forumPost', 'author' | 'contributor'> {
		date?: string
		forumTitle?: string
		postType?: string
		title?: string
	}

	interface HearingItem
		extends PublishedBaseItem,
			BaseItem<'hearing', 'contributor'> {
		title?: string
		committee?: string
		numberOfVolumes?: string
		documentNumber?: string
		pages?: string
		legislativeBody?: string
		session?: string
		history?: string
	}

	interface InstantMessageItem
		extends BaseItem<'instantMessage', 'author' | 'contributor' | 'recipient'> {
		title?: string
		date?: string
	}

	interface InterviewItem
		extends LibraryBaseItem,
			BaseItem<
				'interview',
				'interviewee' | 'contributor' | 'interviewer' | 'translator'
			> {
		interviewMedium?: string
	}

	interface JournalArticleItem
		extends LibraryBaseItem,
			BaseItem<
				'journalArticle',
				'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator'
			> {
		DOI?: string
		ISSN?: string
		issue?: string
		journalAbbreviation?: string
		pages?: string
		publicationTitle?: string
		series?: string
		seriesText?: string
		seriesTitle?: string
		volume?: string
	}

	interface LetterItem
		extends LibraryBaseItem,
			BaseItem<'letter', 'author' | 'contributor' | 'recipient'> {
		letterType?: string
	}

	interface MagazineArticleItem
		extends LibraryBaseItem,
			BaseItem<
				'magazineArticle',
				'author' | 'contributor' | 'reviewedAuthor' | 'translator'
			> {
		publicationTitle?: string
		volume?: string
		issue?: string
		pages?: string
		ISSN?: string
	}

	interface ManuscriptItem
		extends LibraryBaseItem,
			BaseItem<'manuscript', 'author' | 'contributor' | 'translator'> {
		manuscriptType?: string
		numPages?: string
		place?: string
	}

	interface MapItem
		extends PublishedBaseItem,
			LibraryBaseItem,
			BaseItem<'map', 'cartographer' | 'contributor' | 'seriesEditor'> {
		edition?: string
		ISBN?: string
		mapType?: string
		scale?: string
		seriesTitle?: string
	}

	interface NewspaperArticleItem
		extends LibraryBaseItem,
			BaseItem<
				'newspaperArticle',
				'author' | 'contributor' | 'reviewedAuthor' | 'translator'
			> {
		edition?: string
		ISSN?: string
		pages?: string
		place?: string
		publicationTitle?: string
		section?: string
	}

	interface PatentItem
		extends BaseItem<'patent', 'inventor' | 'attorneyAgent' | 'contributor'> {
		applicationNumber?: string
		assignee?: string
		country?: string
		filingDate?: string
		issueDate?: string
		issuingAuthority?: string
		legalStatus?: string
		pages?: string
		patentNumber?: string
		place?: string
		priorityNumbers?: string
		references?: string
		title?: string
	}

	interface PodcastItem
		extends MediaBaseItem,
			BaseItem<'podcast', 'podcaster' | 'contributor' | 'guest'> {
		title?: string
		seriesTitle?: string
		episodeNumber?: string
		audioFileType?: string
	}

	interface PreprintItem
		extends SeriesBaseItem,
			LibraryBaseItem,
			BaseItem<
				'preprint',
				'author' | 'contributor' | 'editor' | 'reviewedAuthor' | 'translator'
			> {
		title?: string
		date?: string
		genre?: string
		repository?: string
		archiveID?: string
		place?: string
		DOI?: string
		citationKey?: string
	}

	interface PresentationItem
		extends BaseItem<'presentation', 'presenter' | 'contributor'> {
		title?: string
		date?: string
		presentationType?: string
		place?: string
		meetingName?: string
	}

	interface RadioBroadcastItem
		extends MediaBaseItem,
			LibraryBaseItem,
			BaseItem<
				'radioBroadcast',
				| 'director'
				| 'castMember'
				| 'contributor'
				| 'guest'
				| 'producer'
				| 'scriptwriter'
			> {
		audioRecordingFormat?: string
		episodeNumber?: string
		network?: string
		place?: string
		programTitle?: string
	}

	interface ReportItem
		extends LibraryBaseItem,
			BaseItem<
				'report',
				'author' | 'contributor' | 'seriesEditor' | 'translator'
			> {
		institution?: string
		pages?: string
		place?: string
		reportNumber?: string
		reportType?: string
		seriesTitle?: string
	}

	interface StatuteItem extends BaseItem<'statute', 'author' | 'contributor'> {
		code?: string
		codeNumber?: string
		dateEnacted?: string
		history?: string
		nameOfAct?: string
		pages?: string
		publicLawNumber?: string
		section?: string
		session?: string
	}

	interface ThesisItem
		extends LibraryBaseItem,
			BaseItem<'thesis', 'author' | 'contributor'> {
		date?: string
		numPages?: string
		place?: string
		thesisType?: string
		university?: string
	}

	interface TVBroadcastItem
		extends MediaBaseItem,
			LibraryBaseItem,
			BaseItem<
				'tvBroadcast',
				| 'director'
				| 'castMember'
				| 'contributor'
				| 'guest'
				| 'producer'
				| 'scriptwriter'
			> {
		episodeNumber?: string
		network?: string
		place?: string
		programTitle?: string
		videoRecordingFormat?: string
	}

	interface VideoRecordingItem
		extends MediaBaseItem,
			LibraryBaseItem,
			VolumeBaseItem,
			BaseItem<
				'videoRecording',
				'director' | 'castMember' | 'contributor' | 'producer' | 'scriptwriter'
			> {
		place?: string
		seriesTitle?: string
		studio?: string
		videoRecordingFormat?: string
	}

	interface WebpageItem
		extends BaseItem<'webpage', 'author' | 'contributor' | 'translator'> {
		date?: string
		title?: string
		websiteTitle?: string
		websiteType?: string
	}

	interface Note {
		title?: string
		note: string
	}

	interface Collection {}

	interface Translator {
		[key: string]: any // allow for exports
	}

	interface WebTranslator extends Translator {
		detectWeb(doc: Document, url: string): ItemType | 'multiple' | false
		doWeb(doc: Document, url: string): void | Promise<void>

		// strongly type commonly-used translator exports
		itemType?: ItemType
	}

	interface ImportTranslator extends Translator {
		detectImport(): boolean
		doImport(): void
	}

	interface ExportTranslator extends Translator {
		doExport(): void
	}

	interface SearchTranslator extends Translator {
		detectSearch(items: Zotero.Item[] | Zotero.Item): boolean
		doSearch(items: Zotero.Item[] | Zotero.Item): void
	}

	interface Translate<T extends Translator> {
		setTranslator(translator: T[] | T | string): boolean
		getTranslatorObject(): Promise<T>
		getTranslatorObject(receiver: (obj: T) => void): void
		setHandler(
			type: 'select',
			handler: (
				translate: Zotero.Translate<T>,
				items: { [id: string]: string }
			) => string[]
		): void
		setHandler(
			type: 'itemDone',
			handler: (translate: Zotero.Translate<T>, item: Zotero.Item) => void
		): void
		setHandler(
			type: 'collectionDone',
			handler: (
				translate: Zotero.Translate<T>,
				collection: Zotero.Collection
			) => void
		): void
		setHandler(
			type: 'done',
			handler: (translate: Zotero.Translate<T>, success: boolean) => void
		): void
		setHandler(
			type: 'debug',
			handler: (translate: Zotero.Translate<T>, message: string) => boolean
		): void
		setHandler(
			type: 'error',
			handler: (translate: Zotero.Translate<T>, error: Error | string) => void
		): void
		setHandler(
			type: 'translators',
			handler: (translate: Zotero.Translate<T>, translators: T[]) => void
		): void
		setHandler(
			type: 'pageModified',
			handler: (translate: Zotero.Translate<T>, doc: Document) => void
		): void
		clearHandlers(
			type:
				| 'select'
				| 'itemDone'
				| 'collectionDone'
				| 'done'
				| 'debug'
				| 'error'
				| 'translators'
				| 'pageModified'
		): void
		removeHandler(
			type: 'select',
			handler: (
				translate: Zotero.Translate<T>,
				items: { [id: string]: string }
			) => string[]
		): void
		removeHandler(
			type: 'itemDone',
			handler: (translate: Zotero.Translate<T>, item: Zotero.Item) => void
		): void
		removeHandler(
			type: 'collectionDone',
			handler: (
				translate: Zotero.Translate<T>,
				collection: Zotero.Collection
			) => void
		): void
		removeHandler(
			type: 'done',
			handler: (translate: Zotero.Translate<T>, success: boolean) => void
		): void
		removeHandler(
			type: 'debug',
			handler: (translate: Zotero.Translate<T>, message: string) => boolean
		): void
		removeHandler(
			type: 'error',
			handler: (translate: Zotero.Translate<T>, error: Error | string) => void
		): void
		removeHandler(
			type: 'translators',
			handler: (translate: Zotero.Translate<T>, translators: T[]) => void
		): void
		removeHandler(
			type: 'pageModified',
			handler: (translate: Zotero.Translate<T>, doc: Document) => void
		): void
		getTranslators(
			getAllTranslators?: boolean,
			checkSetTranslator?: boolean
		): Promise<Zotero.Translator[]>
		translate(
			libraryID?: number | false,
			saveAttachments?: boolean,
			linkFiles?: boolean
		): Promise<Zotero.Item[]>
		setDocument(doc: Document): void
		setString(s: string): void
		setItems(items: Zotero.Item[]): void
		setSearch(item: Zotero.Item): void
	}

	// common
	function getOption(option: string): any
	function getHiddenPref(pref: string): any
	function loadTranslator(
		translatorType: 'web'
	): Zotero.Translate<WebTranslator>
	function loadTranslator(
		translatorType: 'import'
	): Zotero.Translate<ImportTranslator>
	function loadTranslator(
		translatorType: 'export'
	): Zotero.Translate<ExportTranslator>
	function loadTranslator(
		translatorType: 'search'
	): Zotero.Translate<SearchTranslator>
	function done(returnValue: string | false): void
	function debug(str: string, level?: 1 | 2 | 3 | 4 | 5): void
	function read(length?: number): any
	function getXML(): any

	const isBookmarklet: boolean
	const isConnector: boolean
	const isServer: boolean
	const parentTranslator: string | undefined

	// web
	function selectItems(
		items: Record<string, string>
	): Promise<Record<string, string> | undefined>
	function selectItems(
		items: Record<string, string>,
		callback: (items: Record<string, string> | undefined) => void
	): void
	function monitorDOMChanges(target: Node, config: MutationObserverInit): void

	// import & export
	function setProgress(value: number): void

	// export
	function nextItem(): Zotero.Item | undefined
	function nextCollection(): Zotero.Collection | undefined
}

import Z = Zotero
import ZU = Zotero.Utilities

declare function attr(
	node: ParentNode,
	selector: string,
	attr: string,
	index?: number
): string
declare function attr(selector: string, attr: string, index?: number): string
declare function text(
	node: ParentNode,
	selector: string,
	index?: number
): string
declare function text(selector: string, index?: number): string
declare function innerText(
	node: ParentNode,
	selector: string,
	index?: number
): string
declare function innerText(selector: string, index?: number): string

// declare var request = ZU.request
// declare var requestText = ZU.requestText
// declare var requestJSON = ZU.requestJSON
// declare var requestDocument = ZU.requestDocument
