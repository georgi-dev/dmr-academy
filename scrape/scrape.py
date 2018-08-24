# -*- coding: utf-8 -*-
# coding: utf-8
import urllib2
from lxml.html import fromstring,tostring
from copy import deepcopy
import urllib
from datetime import datetime
import datetime
from time import gmtime, strftime
import re
import io
import time
from thread2 import ThreadWorker
import MySQLdb
import random
import logging
records={
	"url":"",
	"pro_title":"",
	"pro_img":"",
	"pro_price":"",
	"item_id":"",
	"sale_date":"",
	"ean":"",
	"mpn":"",
	"sold_count":"",
	"watchers":"",
	"is_seller_top":"",
	"saller":"",
	"sold_date":"",
	"schedule_id":"",
	"upc":"",
	"isbn":"",
}

LOG_FILENAME = 'ebay.log'
logging.basicConfig(filename=LOG_FILENAME,level=logging.DEBUG)
with open('setting.txt') as f:
    dbsetting = f.readlines()
with open('proxy.txt') as f:
    proxy = f.readlines()

config = {
		  'user': dbsetting[0].strip(),
		  'passwd': dbsetting[1].strip(),
		  'host': dbsetting[2].strip(),
		  'db': dbsetting[3].strip(),
		}


def clean_text(string):
	try:
		data=string.replace("\n","")
		data=data.replace("\r","")
		data=data.replace("\t","")
		data=data.replace("  ","")
		return data
	except:
		pass
def remove_sym(string):
	data=string.replace("\n","")
	data=data.replace("\r","")
	data=data.replace("\t","")
	data=data.replace("Â£","")
	data=data.replace("Â","")
	return "".join(filter(lambda x: ord(x)<128, data))
	
	
def xpath_data_unicode(html,xp,i,att=""):
	try:
		if(att==""):
			return unidecode(html.xpath(xp)[i].text)
		else:
			return unidecode(html.xpath(xp)[i].get(att))
	except Exception,e:
		return ""
def xpath_data(html,xp,i,att=""):
	try:
		if(att==""):
			return html.xpath(xp)[i].text
		else:
			return html.xpath(xp)[i].get(att)
	except Exception,e:
		return ""
def xpath_data_string(html,xp,i):
	try:
		return tostring(html.xpath(xp)[i],method="text",encoding='utf-8')
		
	except Exception,e:
		return ""
def refine_description(description):
	description=description.replace("Apply Now","")
	description=description.replace("via Indeed","")
	description=description.replace("\t","")
	description=description.replace("\r","")
	return description.strip()

def load_page(url):
	run=0
	while(run<=1):
		try:
			time.sleep(1)
			header={"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Connection": "keep-alive"}
			if(len(proxy)>0):
				print "proxy"
				prox=proxy[random.randint(0, len(proxy)-1)].strip()
				prx = urllib2.ProxyHandler({
				    'http': prox,
				    'https': prox
				})
				opener = urllib2.build_opener(prx)
				urllib2.install_opener(opener)
			req=urllib2.Request(url,None,header)
			output=urllib2.urlopen(req).read()
			try:
				return output.encode('utf-8')
			except:
				return output
		except Exception, e:
			run=run+1
	return "<html></html>"
def remove_tags(text):
	text=text.replace("<br>","\n")
	text=text.replace("<li>","<li>\n")
	return TAG_RE.sub('', text)

def spliter(string,index,spl):
	try:
		return string.split(spl)[index].strip()
	except:
		return ""

def re_spe_char(s):
	try:
		return re.sub(r'[^\w.]', '', s)
	except:
		return s

def is_ascii(s):
    return all(ord(c) < 128 for c in s)

def Page_scraper(userid,schedule_id):
	thread=[]
 	for i in range(0,4):
 		th = ThreadWorker(scrape)
 		thread.append(th)
 	for i in range(0,4):
 		th1=thread[i]
 		if(th1.get_results()!='running'):
			th1.start((str(d),str(i)))


def get_schedules(userid,username):

	print "\nScraping Started For User : '**"+username+"'**" 
	logging.debug("Scraping Started For User : '**"+username+"**' || Time : "+time.strftime("%Y-%m-%d %H:%M:%S"))
	query = ("select b.schedule_id from users a,user_schedule b where b.user_id=a.id and a.id="+userid)
	try:
		db = MySQLdb.connect(**config)
		cur = db.cursor()
		cur.execute(query)
		schedules=[]
		for row in cur:
			schedules.append(row)
		cur.close()
	except:
		pass
	for schedule in schedules:
		schcount=0
		#time.sleep(random.randint(1, 10))
		time.sleep(2)
		single_sche=False
		seller_s = ""
		seller_s_main = ""
		keyword_s = ""
		item_s = ""
		searchfrom_s = ""
		searchtype=""
		url= ""
		sch_id_s=""
		newtime= datetime.datetime.now()
 		newtime= str(newtime - datetime.timedelta(hours=23)).split('.')[0]
 		detail=[]
		query = ("select schedule_id,search_from,seller_name,keyword,item from scraper_schedule where schedule_id="+str(schedule[0])+" and status=1 and updated_date <='"+str(newtime)+"'")
		try:
			db = MySQLdb.connect(**config)
			cur = db.cursor()
			cur.execute(query)
			for row in cur:
				detail.append(row)
			cur.close()
		except Exception, e:
			print e
		
		for dt in detail:
			single_sche=True
			seller_s=dt[2]
			seller_s_main=seller_s
			keyword_s=dt[3]
			item_s=dt[4]
			searchfrom_s=dt[1]
			sch_id_s=dt[0]
			time.sleep(random.randint(1, 5))
			sch=[]
			query = ("select schedule_id,search_from,seller_name,keyword,item from scraper_schedule where schedule_id="+str(schedule[0])+" and status=1")
			try:
				db = MySQLdb.connect(**config)
				cur = db.cursor()
				cur.execute(query)
				for row in cur:
					sch.append(row)
				cur.close()
			except Exception,e:
				pass
			if(sch):
				sql="update scraper_schedule set status=2, updated_date='"+time.strftime("%Y-%m-%d %H:%M:%S")+"' where schedule_id="+str(sch_id_s)
				#mysql_query(sql,True)
				try:
					query = (sql)
					db = MySQLdb.connect(**config)
					cur = db.cursor()
					cur.execute(query)
					db.commit()
					cur.close()
				except Exception,e:
					pass
			else:
				single_sche=False
			break
		url=""
		if (single_sche!=False):
			seller_s= urllib.quote_plus(seller_s)
			keyword_s= keyword_s
			item_s= item_s
			searchfrom_s= urllib.quote_plus(searchfrom_s)
			sch_id_s= sch_id_s
			if(keyword_s!=""):
				keyword_s = "&_nkw="+urllib.quote_plus(keyword_s)
			if(keyword_s=="" and seller_s!=""):
				seller_s=seller_s_main
				if(item_s=='Sold Items'):
					if(searchfrom_s=="USA"):
						url="http://www.ebay.com/sch/"+seller_s+"/m.html?_nkw&_armrs=1&_from&LH_Complete=1&LH_Sold=1&rt=nc"
					if(searchfrom_s=="UK"):
						url="http://www.ebay.co.uk/sch/"+seller_s+"/m.html?_nkw&_armrs=1&_from&LH_Complete=1&LH_Sold=1&rt=nc"
				else:
					if(searchfrom_s=="USA"):
						url="http://www.ebay.com/sch/m.html?_nkw=&_armrs=1&_from=&_ssn="+seller_s
					if(searchfrom_s=="UK"):
						url="http://www.ebay.co.uk/sch/m.html?_nkw=&_armrs=1&_from=&_ssn="+seller_s+"&rt=nc"
			else:
				if(item_s=='Sold Items'):
					if(searchfrom_s=='USA'):
						searchtype="&LH_Sold=1"
					if(searchfrom_s=='UK'):
						searchtype="&LH_Sold=1"
				else:
					searchtype="";
				
				if(searchfrom_s=="USA"):
					url="http://www.ebay.com/sch/"+seller_s+"/m.html?"+keyword_s+"&_armrs=1&_ipg=&_from="+searchtype
				if(searchfrom_s=="UK"):
					url = 'http://www.ebay.co.uk/sch/m.html?_from=R40&_sacat=0'+keyword_s+'&rt=nc&_clu=2&gbr=1&_ssn='+seller_s+searchtype
		query = "update scraper_schedule set search_link='%s' where schedule_id='%s'" % (url,str(sch_id_s))
		try:
			db = MySQLdb.connect(**config)
			cur = db.cursor()
			cur.execute(query)
			db.commit()
			cur.close()
		except:
			pass

		if(url!=""):
			print "\nScraping Seller '"+seller_s_main+"'"
			logging.debug("Scraping started. || Seller '"+seller_s_main+"' || ScheduleID '"+str(sch_id_s)+"' || User : "+username+"' || Time : "+time.strftime("%Y-%m-%d %H:%M:%S"))
			pg=1
			page=url+"&_ipg=200&_pgn="+str(pg)
			while(page!=""):
				page=url+"&_ipg=200&_pgn="+str(pg)
				pg=pg+1
				page=page
				rg=0
				while(rg<=2):
					try:
						time.sleep(1)
						header={"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Connection": "keep-alive"}
						if(len(proxy)>0):
							print "proxy"
							prox=proxy[random.randint(0, len(proxy)-1)].strip()
							prx = urllib2.ProxyHandler({
							    'http': prox,
							    'https': prox
							})
							opener = urllib2.build_opener(prx)
							urllib2.install_opener(opener)
						req=urllib2.Request(page,None,header)
						output=urllib2.urlopen(req).read()
						try:
							html=fromstring(output.encode('utf-8'))
						except:
							html=fromstring(output)
						rg=5
					except Exception, e:
						rg=rg+1
						html=fromstring("<html></html>")
				#html=fromstring(load_page(page))
				page=""
				EbayLinkRecord={
				"url":"",
				"sold":"",
				"scheduleid":"",
				}
				EbayLinks=[]
				nodelist=[]
				try:
					nodelist=html.xpath("//ul[@id='ListViewInner']/li")
				except:
					pass
				for i in range(0,len(nodelist)):
					node=fromstring(tostring(nodelist[i]))
					EbayLink=deepcopy(EbayLinkRecord)
					try:
						EbayLink["scheduleid"]=sch_id_s
						EbayLink["sold"]=xpath_data(node,"//li[@class='timeleft']/span/span",0)
						EbayLink["url"]=xpath_data(node,"//h3/a",0,"href").split('?')[0]
					except:
						pass
					EbayLinks.append(EbayLink)
					
				query = ("update scraper_schedule set updated_date='"+time.strftime("%Y-%m-%d %H:%M:%S")+"' where schedule_id="+str(sch_id_s))
				logging.debug("Updated Schedule || Seller '"+seller_s_main+"' || ScheduleID '"+str(sch_id_s)+"' || User : "+username+"' || Time : "+time.strftime("%Y-%m-%d %H:%M:%S"))
				db = MySQLdb.connect(**config)
				cur = db.cursor()
				cur.execute(query)
				db.commit()
				cur.close()

				print "\n\n+++++++++++++++++++++++++++++\n\nCollecting Products\nProducts : "+str(len(EbayLinks))+"\nEbay Pageno : "+str(pg-1)+"\nUser : '"+username+"'\nFor Seller : '"+seller_s_main+"'\n\n+++++++++++++++++++++++++++++\n\n"
				#print "updated the schedule "+str(sch_id_s)+" for userid "+str(userid)+" for page "+str(pg)
				thcount=0 #len(EbayLinks)
				schcount=schcount+len(EbayLinks)
				thread=[]
			 	for i in range(0,4):
			 		th = ThreadWorker(scrape)
			 		thread.append(th)
				while(thcount<len(EbayLinks)):
					for i in range(0,4):
				 		try:
					 		th1=thread[i]
					 		if(th1.get_results()!='running'):
					 			th1.start((EbayLinks[thcount]["url"],EbayLinks[thcount]["sold"],EbayLinks[thcount]["scheduleid"]))
								thcount=thcount+1
						except Exception,e:
							print e
				isdone=False
				while(isdone==False):
					isdone=True
					for i in range(0,4):
						th1=thread[i]
				 		if(th1.get_results()=='running'):
							isdone=False
					
				try:
					page=xpath_data(html,"//a[@class='gspr next']",0,"href")
				except:
					pass
				
		sql="update scraper_schedule set scraped_result='"+str(schcount)+"', status=1, updated_date='"+time.strftime("%Y-%m-%d %H:%M:%S")+"' where schedule_id="+str(sch_id_s)
		try:
			db = MySQLdb.connect(**config)
			cur = db.cursor()
			cur.execute(sql)
			db.commit()
			cur.close()
		except:
			pass
		print "Schedule Scraping Completed For User : '**"+username+"**' \n Scraping Seller '"+seller_s_main
		logging.debug("Schedule scraping Completed || Seller '"+seller_s_main+"' || ScheduleID '"+str(sch_id_s)+"' || User : '**"+username+"**' || Time : "+time.strftime("%Y-%m-%d %H:%M:%S"))
		#return #need to remove

	print "Scraping Completed for User : '" +username+"'"
	logging.debug("User Scraping Completed || Seller '"+seller_s_main+"' || User : "+username+"' || Time : "+time.strftime("%Y-%m-%d %H:%M:%S"))
def mysql_query(sql,commit=False):
	try:
		rows=[]
		query = (sql)
		db = MySQLdb.connect(**config)
		cur = db.cursor()
		cur.execute(query)
		if(commit==True):
			db.commit()
		if(commit==False):
			for row in cur:
				rows.append(row)
		cur.close()
		return rows
	except Exception,e:
		print e
		return False


def scrape(url,sold,scheduleid):
	data=deepcopy(records)
	sql="select * from ebay_pro_detail where url='"+url+"' and schedule_id="+str(scheduleid)
	#sql="select * from ebay0_pro_detail where url='"+url+"' and schedule_id="+str(scheduleid)
	#rows=mysql_query(sql)
	rows=[]
	try:
		query = (sql)
		db = MySQLdb.connect(**config)
		cur = db.cursor()
		cur.execute(query)
		for row in cur:
			rows.append(row)
		cur.close()
	except Exception,e:
		pass
	rg=0
	while(rg<=2):
		try:
			time.sleep(1)
			header={"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:41.0) Gecko/20100101 Firefox/41.0","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","Connection": "keep-alive"}
			if(len(proxy)>0):
				print "proxy"
				prox=proxy[random.randint(0, len(proxy)-1)].strip()
				prx = urllib2.ProxyHandler({
				    'http': prox,
				    'https': prox
				})
				opener = urllib2.build_opener(prx)
				urllib2.install_opener(opener)
			req=urllib2.Request(page,None,header)
			output=urllib2.urlopen(req).read()
			try:
				html=fromstring(output.encode('utf-8'))
			except:
				html=fromstring(output)
			rg=5
		except Exception, e:
			rg=rg+1
			html=fromstring("<html></html>")	
	#html=fromstring(load_page(url))
	data["url"]=url
	data["schedule_id"]=scheduleid
	data["sold_date"]=sold
	data["pro_title"]=remove_sym(xpath_data_string(html,"//h1[@id='itemTitle']",0).replace("Details about","").strip())
	data["pro_price"]=remove_sym(xpath_data_string(html,"//span[contains(@id,'prcIsum')]",0).strip())
	if(data["pro_price"]==""):
		data["pro_price"]=remove_sym(xpath_data_string(html,"//span[@id='mm-saleDscPrc']",0).strip())
	if(data["pro_price"]==""):
		data["pro_price"]=remove_sym(xpath_data_string(html,"//span[@id='mm-saleDscPrc']",0).strip())
	if(data["pro_price"]==""):
		data["pro_price"]=remove_sym(xpath_data_string(html,"//span[@class='notranslate']",0).strip())
	if(data["pro_price"]==""):
		data["pro_price"]=remove_sym(xpath_data_string(html,"//span[@class='notranslate vi-VR-cvipPrice']",0).strip())
	data["sold_count"]=xpath_data_string(html,"//a[contains(text(),' sold')]/parent::span",0).strip()
	data["watchers"]=remove_sym(xpath_data_string(html,"//span[@id='vi-bybox-watchers']",0).strip())
	data["saller"]=xpath_data_string(html,"//a[@id='mbgLink']",0).strip()
	data["is_seller_top"]=xpath_data(html,"//div[@id='topratedplusimage']",0,"id").strip()
	if(data["is_seller_top"]==""):
		data["is_seller_top"]=xpath_data(html,"//span[@id='topratedplusimage']",0,"id").strip()
	if(data["is_seller_top"]==""):
		data["is_seller_top"]="No"
	else:
		data["is_seller_top"]="Yes"
	data["pro_img"]=xpath_data(html,"//img[@id='icImg']",0,"src").strip()
	data["item_id"]=xpath_data(html,"//a[@id='sc_email']",0,"data-itemid").strip()
	data["ean"]=xpath_data_string(html,"//td[contains(text(),'EAN:')]/following-sibling::td",0).strip()
	data["mpn"]=xpath_data_string(html,"//td[contains(text(),'MPN:')]/following-sibling::td",0).strip()
	data["upc"]=xpath_data_string(html,"//td[contains(text(),'UPC:')]/following-sibling::td",0).strip()
	data["isbn"]=xpath_data_string(html,"//td[contains(text(),'ISBN:')]/following-sibling::td",0).strip()
	if(rows):
		sql="""update ebay_pro_detail set url='%s', pro_title='%s', pro_img='%s', pro_price='%s', item_id='%s' ,sale_date='%s' ,ean='%s' ,mpn='%s' ,sold_count='%s' ,watchers='%s' ,is_seller_top='%s' ,saller='%s' ,sold_date='%s' ,schedule_id='%s' ,upc='%s' ,isbn='%s' where id='%s'"""%(data["url"],data["pro_title"],data["pro_img"],data["pro_price"],data["item_id"],data["sale_date"],data["ean"],data["mpn"],data["sold_count"],data["watchers"],data["is_seller_top"],data["saller"],data["sold_date"],data["schedule_id"],data["upc"],data["isbn"],rows[0][0])
		#mysql_query(sql,True)
		try:
			query = (sql)
			db = MySQLdb.connect(**config)
			cur = db.cursor()
			cur.execute(query)
			db.commit()
			cur.close()
		except Exception,e:
			pass
			
		print "Product updated for schedule "+str(scheduleid)
		logging.debug("Product updated || Product Id : "+str(rows[0][0])+" || Schedule id "+str(scheduleid)+" || Time : "+time.strftime("%Y-%m-%d %H:%M:%S"))
	else:
		sql="""insert into ebay_pro_detail (url,pro_title,pro_img,pro_price,item_id,sale_date,ean,mpn,sold_count,watchers,is_seller_top,saller,sold_date,schedule_id,upc,isbn) values ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')"""%(data["url"],data["pro_title"],data["pro_img"],data["pro_price"],data["item_id"],data["sale_date"],data["ean"],data["mpn"],data["sold_count"],data["watchers"],data["is_seller_top"],data["saller"],data["sold_date"],data["schedule_id"],data["upc"],data["isbn"])
		#mysql_query(sql,True)
		try:
			query = (sql)
			db = MySQLdb.connect(**config)
			cur = db.cursor()
			cur.execute(query)
			db.commit()
			cur.close()
		except Exception,e:
			pass
		print "Product inserted for schedule "+str(scheduleid)
		logging.debug("Product inserted || Product Title : "+data["pro_title"]+" || Schedule id "+str(scheduleid)+" || Time : "+time.strftime("%Y-%m-%d %H:%M:%S"))




	
	

if __name__ == '__main__':
 	
 	query = ("select id,user_name from users")
 	try:
		db = MySQLdb.connect(**config)
		cur = db.cursor()
		cur.execute(query)
		users=[]
		for row in cur:
			users.append(row)
			
		cur.close()
	except:
		pass
	threadcount=4
	with open('thread.txt') as f:
		threadcount = int(f.readlines()[0].strip())

	if(len(users)<=threadcount):
		threadcount=len(users)
	usthcount=0
	thread=[]
 	for i in range(0,threadcount):
 		th = ThreadWorker(get_schedules)
 		thread.append(th)
	while(usthcount<len(users)):
		time.sleep(1)
		for i in range(0,threadcount):
	 		try:
	 			th1=thread[i]
		 		if(th1.get_results()!='running'):
		 			th1.start((str(users[usthcount][0]),str(users[usthcount][1])))
					usthcount=usthcount+1
				
			except:
				pass
	isdone=False
	while(isdone==False):
		isdone=True
		for i in range(0,threadcount):
			th1=thread[i]
	 		if(th1.get_results()=='running'):
				isdone=False
		 